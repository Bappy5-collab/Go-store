-- ============================================================
--  Go-store — Supabase schema
--  Supabase Dashboard > SQL Editor > New query > eta paste kore RUN koro
-- ============================================================

-- ---------- 1. PROFILES table ----------
-- protiti user er extra info (auth.users er sathe link)
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  full_name   text,
  phone       text,
  address     text,
  city        text,
  country     text,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

alter table public.profiles enable row level security;

-- user shudhu nijer profile dekhte/edit korte parbe
drop policy if exists "Profiles are viewable by owner" on public.profiles;
create policy "Profiles are viewable by owner"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "Users can insert own profile" on public.profiles;
create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- ---------- 2. signup hole automatic profile create ----------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', ''));
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ---------- 3. ORDERS table ----------
-- protiti order: ki ki kinche (items jsonb), koto cost, kobe
create table if not exists public.orders (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  items         jsonb not null,           -- [{id, title, price, quantity, image}]
  subtotal      numeric(10,2) not null,
  tax           numeric(10,2) not null default 0,
  total         numeric(10,2) not null,
  status        text not null default 'paid',
  shipping_info jsonb,                     -- {firstName, lastName, address, city, ...}
  created_at    timestamptz default now()
);

alter table public.orders enable row level security;

drop policy if exists "Users can view own orders" on public.orders;
create policy "Users can view own orders"
  on public.orders for select
  using (auth.uid() = user_id);

drop policy if exists "Users can create own orders" on public.orders;
create policy "Users can create own orders"
  on public.orders for insert
  with check (auth.uid() = user_id);

-- ---------- 4. (optional) jader profile nai (purono user) tader jonno backfill ----------
insert into public.profiles (id)
select id from auth.users
on conflict (id) do nothing;

-- ---------- 5. NEWSLETTER SUBSCRIBERS table ----------
-- newsletter form theke email gula ekhane jma hobe
create table if not exists public.subscribers (
  id          uuid primary key default gen_random_uuid(),
  email       text not null unique,
  created_at  timestamptz default now()
);

alter table public.subscribers enable row level security;

-- je keu (anon visitor o) subscribe korte parbe
drop policy if exists "Anyone can subscribe" on public.subscribers;
create policy "Anyone can subscribe"
  on public.subscribers for insert
  with check (true);
