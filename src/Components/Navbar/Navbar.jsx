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
import Login from './LoginFrom/Login';
import { getCartItemCount, getCartTotal } from '../../utils/cartUtils';

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

                {/* Dropdowns */}
                {[
                  {
                    title: 'Tablets',
                    path: '/tablets',
                    content: (
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Brands</h4>
                          <ul className="space-y-2">
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Samsung</li>
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Apple</li>
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Huawei</li>
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Lenovo</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Operating System</h4>
                          <ul className="space-y-2">
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Android</li>
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">iOS</li>
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Windows</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Accessories</h4>
                          <ul className="space-y-2">
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Tablet Covers</li>
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Stylus Pens</li>
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Screen Protectors</li>
                          </ul>
                        </div>
                      </div>
                    ),
                  },
                  {
                    title: 'Joomla!',
                    path: '/joomla',
                    content: (
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Extensions</h4>
                          <ul className="space-y-2">
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Modules</li>
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Plugins</li>
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Templates</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Resources</h4>
                          <ul className="space-y-2">
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Documentation</li>
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Community</li>
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Support Forum</li>
                          </ul>
                        </div>
                      </div>
                    ),
                  },
                  {
                    title: 'Blog',
                    path: '/blog',
                    content: (
                      <ul className="space-y-2">
                        <li className="cursor-pointer hover:text-[#d44145] transition-colors">Latest Posts</li>
                        <li className="cursor-pointer hover:text-[#d44145] transition-colors">Tech News</li>
                        <li className="cursor-pointer hover:text-[#d44145] transition-colors">Tips & Tutorials</li>
                        <li className="cursor-pointer hover:text-[#d44145] transition-colors">Product Reviews</li>
                      </ul>
                    ),
                  },
                  {
                    title: 'Pages',
                    path: '/pages',
                    content: (
                      <ul className="space-y-2">
                        <li onClick={() => navigate('/about')} className="cursor-pointer hover:text-[#d44145] transition-colors">About Us</li>
                        <li onClick={() => navigate('/faq')} className="cursor-pointer hover:text-[#d44145] transition-colors">FAQ</li>
                        <li onClick={() => navigate('/privacy')} className="cursor-pointer hover:text-[#d44145] transition-colors">Privacy Policy</li>
                        <li onClick={() => navigate('/terms')} className="cursor-pointer hover:text-[#d44145] transition-colors">Terms of Service</li>
                      </ul>
                    ),
                  },
                  {
                    title: 'Joomshopping',
                    path: '/joomshopping',
                    content: (
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Categories</h4>
                          <ul className="space-y-2">
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Electronics</li>
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Clothing</li>
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Home & Garden</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Shop Features</h4>
                          <ul className="space-y-2">
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Cart System</li>
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Checkout</li>
                            <li className="cursor-pointer hover:text-[#d44145] transition-colors">Shipping Options</li>
                          </ul>
                        </div>
                      </div>
                    ),
                  },
                ].map(({ title, path, content }) => (
                  <div className="relative group" key={title}>
                    <div className="flex gap-1 items-center cursor-pointer" onClick={() => path && navigate(path)}>
                      <h3 className="text-lg">{title}</h3>
                      <KeyboardArrowDownIcon />
                    </div>
                    <div className="absolute top-full left-0 mt-2 bg-white p-4 sm:p-6 shadow-2xl rounded-md opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50 min-w-[280px] sm:min-w-[300px] max-w-[90vw]">
                      {content}
                    </div>
                  </div>
                ))}

                <h3 className="text-lg cursor-pointer" onClick={() => navigate('/contact')}>Contact</h3>
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex gap-2 sm:gap-4 items-center">
              <SearchIcon className="text-[#d44145] cursor-pointer" style={{ width: 24, height: 24 }} />
              <AccountCircleIcon className="text-[#d44145] cursor-pointer hidden sm:block" style={{ width: 24, height: 24 }} />
              <div className='hidden lg:block cursor-pointer' onClick={handleOpen}>
                <h3 className='font-semibold text-sm'>Login <br /><span className='text-xs text-gray-400'>or Register</span></h3>
              </div>
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
                <AccountCircleIcon className="text-[#d44145]" onClick={handleOpen} style={{ width: 24, height: 24 }} />
                <span className="text-sm font-medium cursor-pointer" onClick={handleOpen}>Login / Register</span>
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
