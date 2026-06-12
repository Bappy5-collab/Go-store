import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CottageIcon from '@mui/icons-material/Cottage';
import StorefrontIcon from '@mui/icons-material/Storefront';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { FaArrowRight } from 'react-icons/fa';
import Login from './LoginFrom/Login';
import { getCartItemCount, getCartTotal } from '../../utils/cartUtils';
import { useAuth } from '../../Context/AuthContext';
import { useToast } from '../Toast/Toast';

// ---- Mega-menu data (data-driven, easy to maintain) ----
const MENUS = [
  {
    title: 'Tablets',
    path: '/tablets',
    align: 'left',
    columns: [
      { heading: 'Brands', items: ['Samsung', 'Apple', 'Huawei', 'Lenovo'] },
      { heading: 'Operating System', items: ['Android', 'iOS', 'Windows'] },
      { heading: 'Accessories', items: ['Tablet Covers', 'Stylus Pens', 'Screen Protectors'] },
    ],
    promo: { tag: 'New Arrival', title: 'iPad Pro M4 in stock now', cta: 'Shop Tablets' },
  },
  {
    title: 'Joomla!',
    path: '/joomla',
    align: 'left',
    columns: [
      { heading: 'Extensions', items: ['Modules', 'Plugins', 'Templates'] },
      { heading: 'Resources', items: ['Documentation', 'Community', 'Support Forum'] },
    ],
  },
  {
    title: 'Blog',
    path: '/blog',
    align: 'left',
    columns: [
      { heading: 'Explore', items: ['Latest Posts', 'Tech News', 'Tips & Tutorials', 'Product Reviews'] },
    ],
  },
  {
    title: 'Pages',
    path: '/pages',
    align: 'right',
    columns: [
      {
        heading: 'Company',
        items: [
          { label: 'About Us', path: '/about' },
          { label: 'FAQ', path: '/faq' },
          { label: 'Privacy Policy', path: '/privacy' },
          { label: 'Terms of Service', path: '/terms' },
        ],
      },
    ],
  },
  {
    title: 'Joomshopping',
    path: '/joomshopping',
    align: 'right',
    columns: [
      { heading: 'Categories', items: ['Electronics', 'Clothing', 'Home & Garden'] },
      { heading: 'Shop Features', items: ['Cart System', 'Checkout', 'Shipping Options'] },
    ],
    promo: { tag: 'Deal of the week', title: 'Up to 40% off electronics', cta: 'Grab the deal' },
  },
];

export default function Navbar() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { showToast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogout = async () => {
    const { error } = await signOut();
    if (error) {
      showToast(error.message, 'error');
    } else {
      showToast('Logged out successfully', 'success');
    }
  };

  useEffect(() => {
    const updateCart = () => {
      setCartCount(getCartItemCount());
      setCartTotal(getCartTotal());
    };
    updateCart();
    const interval = setInterval(updateCart, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white shadow-md z-50 relative">
      <div className='p-4'>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-4">
           <img src="https://i.ibb.co/6cwPq6zj/logo.png" alt="logo" className="h-8 sm:h-10 w-auto" />
          </div>

          {/* Right icons and Hamburger */}
          <div className="flex items-center gap-4">
            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-12 items-center">
              <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center cursor-pointer hover:text-[#d44145] transition-colors" onClick={() => navigate('/')}> <CottageIcon /> <h3 className="text-lg">Home</h3></div>

                <div className="flex gap-2 items-center cursor-pointer hover:text-[#d44145] transition-colors" onClick={() => navigate('/products')}> <StorefrontIcon /> <h3 className="text-lg">Shop</h3></div>

                {/* Mega-menu dropdowns */}
                {MENUS.map((menu) => (
                  <div className="relative group" key={menu.title}>
                    <div
                      className="flex gap-1 items-center cursor-pointer py-2 text-lg transition-colors group-hover:text-[#d44145]"
                      onClick={() => navigate(menu.path)}
                    >
                      <h3>{menu.title}</h3>
                      <KeyboardArrowDownIcon className="transition-transform duration-300 group-hover:rotate-180" />
                    </div>

                    {/* Panel wrapper — pt-3 makes a hover bridge so the menu doesn't disappear */}
                    <div
                      className={`absolute top-full ${menu.align === 'right' ? 'right-0' : 'left-0'} pt-3 z-50
                        opacity-0 invisible translate-y-2 pointer-events-none
                        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto
                        transition-all duration-300 ease-out`}
                    >
                      <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 p-5 flex gap-6 w-max max-w-[92vw]">
                        {/* Link columns (static class names so Tailwind JIT keeps them) */}
                        <div className={`grid gap-6 ${{ 1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3' }[menu.columns.length]}`}>
                          {menu.columns.map((col) => (
                            <div key={col.heading} className="min-w-[150px]">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">{col.heading}</h4>
                              <ul className="space-y-1">
                                {col.items.map((item) => {
                                  const label = typeof item === 'string' ? item : item.label;
                                  const target = typeof item === 'string' ? menu.path : item.path;
                                  return (
                                    <li key={label}>
                                      <button
                                        onClick={() => navigate(target)}
                                        className="group/item flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#d44145] transition-colors"
                                      >
                                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-300 transition-colors group-hover/item:bg-[#d44145]" />
                                        <span className="whitespace-nowrap">{label}</span>
                                        <FaArrowRight className="ml-auto text-[10px] opacity-0 -translate-x-1 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                                      </button>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Promo card */}
                        {menu.promo && (
                          <div className="hidden xl:flex w-56 flex-col justify-between rounded-xl bg-gradient-to-br from-[#d44145] to-orange-400 p-5 text-white">
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/80">{menu.promo.tag}</p>
                              <h4 className="mt-2 text-lg font-bold leading-snug">{menu.promo.title}</h4>
                            </div>
                            <button
                              onClick={() => navigate(menu.path)}
                              className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#d44145] transition hover:gap-3"
                            >
                              {menu.promo.cta} <FaArrowRight className="text-[10px]" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <h3 className="text-lg cursor-pointer py-2 transition-colors hover:text-[#d44145]" onClick={() => navigate('/contact')}>Contact</h3>
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex gap-2 sm:gap-4 items-center">
              <SearchIcon className="text-[#d44145] cursor-pointer" style={{ width: 24, height: 24 }} />
              <AccountCircleIcon className="text-[#d44145] cursor-pointer hidden sm:block" style={{ width: 24, height: 24 }} />
              {user ? (
                <div className='hidden lg:block'>
                  <h3 className='font-semibold text-sm max-w-[140px] truncate cursor-pointer hover:text-[#d44145]' onClick={() => navigate('/profile')}>{user.email}</h3>
                  <span className='text-xs text-[#d44145] cursor-pointer hover:underline mr-2' onClick={() => navigate('/profile')}>Profile</span>
                  <span className='text-xs text-gray-400 cursor-pointer hover:underline' onClick={handleLogout}>Logout</span>
                </div>
              ) : (
                <div className='hidden lg:block cursor-pointer' onClick={handleOpen}>
                  <h3 className='font-semibold text-sm'>Login <br /><span className='text-xs text-gray-400'>or Register</span></h3>
                </div>
              )}
              <div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
                <AddShoppingCartIcon className="text-[#d44145]" style={{ width: 24, height: 24 }} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#d44145] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className='hidden xl:block cursor-pointer' onClick={() => navigate('/cart')}>
                <h3 className='font-semibold text-sm'>My Cart <br /><span className='text-xs text-gray-400'>{cartCount} items - ${cartTotal.toFixed(2)}</span></h3>
              </div>

              {/* Hamburger Icon */}
              <div className="lg:hidden block">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#d44145]">
                  {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Section */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-5 pb-4 border-t pt-4">
            <div className="flex flex-col gap-3 text-base">
              <div className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 rounded cursor-pointer" onClick={() => navigate('/')}>
                <CottageIcon className="text-[#d44145]" />
                <span className="font-medium">Home</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 rounded cursor-pointer" onClick={() => navigate('/products')}>
                <StorefrontIcon className="text-[#d44145]" />
                <span className="font-medium">Shop</span>
              </div>
              {[
                { name: "Tablets", path: "/tablets" },
                { name: "Joomla!", path: "/joomla" },
                { name: "Blog", path: "/blog" },
                { name: "Pages", path: "/pages" },
                { name: "Joomshopping", path: "/joomshopping" }
              ].map((item) => (
                <div 
                  className="flex items-center justify-between px-2 py-2 hover:bg-gray-100 rounded cursor-pointer" 
                  key={item.name}
                  onClick={() => navigate(item.path)}
                >
                  <span className="font-medium">{item.name}</span>
                  <KeyboardArrowDownIcon className="text-gray-500" />
                </div>
              ))}
              <div className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 rounded cursor-pointer" onClick={() => navigate('/contact')}>
                <span className="font-medium">Contact</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-2 mt-2 pt-2 border-t">
                <AccountCircleIcon className="text-[#d44145]" style={{ width: 24, height: 24 }} />
                {user ? (
                  <div className="flex flex-col">
                    <span className="text-sm font-medium truncate max-w-[200px] cursor-pointer" onClick={() => navigate('/profile')}>{user.email}</span>
                    <div className="flex gap-3">
                      <span className="text-xs text-[#d44145] cursor-pointer hover:underline" onClick={() => navigate('/profile')}>Profile</span>
                      <span className="text-xs text-gray-400 cursor-pointer hover:underline" onClick={handleLogout}>Logout</span>
                    </div>
                  </div>
                ) : (
                  <span className="text-sm font-medium cursor-pointer" onClick={handleOpen}>Login / Register</span>
                )}
              </div>
              <div className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 rounded cursor-pointer" onClick={() => navigate('/cart')}>
                <AddShoppingCartIcon className="text-[#d44145]" style={{ width: 20, height: 20 }} />
                <span className="font-medium">Cart ({cartCount})</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <Login open={open} setOpen={setOpen} handleClose={handleClose} />
    </div>
  );
}
