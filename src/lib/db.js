import { supabase } from './supabaseClient';

// ---------- PROFILE ----------

export const getProfile = async (userId) => {
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
    return { data, error };
};

export const updateProfile = async (userId, updates) => {
    const { data, error } = await supabase
        .from('profiles')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', userId)
        .select()
        .single();
    return { data, error };
};

// ---------- ORDERS ----------

export const createOrder = async (order) => {
    const { data, error } = await supabase
        .from('orders')
        .insert(order)
        .select()
        .single();
    return { data, error };
};

export const getOrders = async (userId) => {
    const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
    return { data, error };
};

// ---------- NEWSLETTER ----------

export const subscribeNewsletter = async (email) => {
    const { data, error } = await supabase
        .from('subscribers')
        .insert({ email })
        .select()
        .single();
    return { data, error };
};
