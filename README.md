# Go Store - E-Commerce Website

A modern, fully responsive e-commerce website built with React, Vite, and Tailwind CSS. Go Store offers a complete shopping experience with product browsing, cart management, checkout, and more.

## 🚀 Features

### 🛍️ Shopping Features

- **Product Catalog**
  - Browse products by categories (Accessories, Electronics, Tablets, Watches)
  - Featured products section with tabbed navigation
  - Product carousel with smooth animations
  - Product quick view modal
  - Product details page with image gallery
  - Related products section

- **Shopping Cart**
  - Add products to cart from product cards, details page, and quick view
  - View cart with all items
  - Update product quantities
  - Remove items from cart
  - Clear entire cart
  - Real-time cart total calculation
  - Cart persistence using localStorage
  - Cart count badge in navbar

- **Checkout & Payment**
  - Secure checkout page
  - Shipping information form
  - Payment information form
  - Order summary with tax calculation
  - Order confirmation

### 🎨 User Interface

- **Responsive Design**
  - Fully responsive across all devices (mobile, tablet, desktop)
  - Mobile-friendly navigation menu
  - Adaptive layouts for all screen sizes
  - Touch-friendly buttons and interactions

- **Modern UI Components**
  - Animated banner carousel with auto-slide
  - Smooth page transitions
  - Hover effects and animations
  - Gradient buttons and badges
  - Toast notifications for all actions
  - Modal dialogs
  - Dropdown menus

- **Color Theme**
  - Consistent color scheme throughout
  - Primary red: #d44145
  - Gradient: Pink to Orange
  - Dark footer theme

### 📱 Pages & Navigation

- **Home Page**
  - Hero banner with carousel
  - Featured products section
  - Sale section with countdown timer
  - Product categories
  - Statistics section
  - Customer testimonials
  - Newsletter subscription

- **Product Pages**
  - Product Details page with image gallery
  - Tablets category page
  - Product filtering and browsing

- **Information Pages**
  - About Us
  - FAQ (with accordion)
  - Privacy Policy
  - Terms of Service
  - Contact Us (with contact form)

- **Additional Pages**
  - Blog page with posts
  - Joomla! resources page
  - Joomshopping page
  - Pages directory

### 🔔 Notifications & Feedback

- **Toast Notifications**
  - Success notifications (add to cart, payment, etc.)
  - Info notifications (cart cleared, item removed)
  - Warning notifications (validation errors)
  - Error notifications
  - Auto-dismiss after 3 seconds
  - Manual dismiss option
  - Smooth animations

### 🔐 User Features

- **Authentication**
  - Login modal
  - Registration option
  - Password visibility toggle
  - Web authentication option

- **User Actions**
  - Add to wishlist
  - Product search
  - Account management
  - Order tracking

### 🛠️ Technical Features

- **State Management**
  - localStorage for cart persistence
  - React Context API for toast notifications
  - React Router for navigation

- **Performance**
  - Optimized images
  - Lazy loading
  - Smooth animations with Framer Motion
  - Fast page transitions

- **Accessibility**
  - Semantic HTML
  - Keyboard navigation support
  - Screen reader friendly
  - Proper ARIA labels

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 3.4.17
- **Routing**: React Router DOM 7.6.2
- **Animations**: Framer Motion 12.19.1
- **Icons**: React Icons 5.5.0, Material-UI Icons
- **UI Components**: Material-UI 7.1.2

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Go-Store
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
Go-Store/
├── src/
│   ├── Components/
│   │   ├── Banner/          # Hero carousel
│   │   ├── Footer/           # Footer components
│   │   ├── Navbar/           # Navigation bar
│   │   ├── sections/         # Home page sections
│   │   └── Toast/            # Toast notification system
│   ├── Pages/
│   │   ├── About/            # About Us page
│   │   ├── Blog/             # Blog page
│   │   ├── Cart/             # Shopping cart page
│   │   ├── Contact/          # Contact page
│   │   ├── FAQ/              # FAQ page
│   │   ├── Joomla/           # Joomla page
│   │   ├── Joomshopping/     # Joomshopping page
│   │   ├── Pages/            # Pages directory
│   │   ├── Payment/          # Checkout page
│   │   ├── Privacy/           # Privacy policy
│   │   ├── ProductDetails/   # Product details page
│   │   ├── Tablets/           # Tablets category page
│   │   └── Terms/            # Terms of service
│   ├── Layout/
│   │   └── Main/             # Main layout
│   ├── Router/               # Route configuration
│   ├── data/                 # Product data
│   └── utils/                # Utility functions (cart utils)
├── public/                   # Static assets
└── package.json
```

## 🎯 Key Features Breakdown

### Shopping Cart System
- ✅ Add to cart from multiple locations
- ✅ Persistent cart using localStorage
- ✅ Real-time cart updates
- ✅ Quantity management
- ✅ Item removal
- ✅ Cart total calculation
- ✅ Empty cart state

### Product Management
- ✅ Product listing with categories
- ✅ Product details with image gallery
- ✅ Product search
- ✅ Product filtering
- ✅ Product reviews display
- ✅ Stock status
- ✅ Price display with discounts

### User Experience
- ✅ Toast notifications for all actions
- ✅ Smooth page transitions
- ✅ Loading states
- ✅ Error handling
- ✅ Form validation
- ✅ Responsive navigation
- ✅ Mobile menu

### Design & UI
- ✅ Modern gradient designs
- ✅ Consistent color scheme
- ✅ Hover effects
- ✅ Animations
- ✅ Card-based layouts
- ✅ Clean typography
- ✅ Professional footer

## 🌐 Routes

- `/` - Home page
- `/product/:id` - Product details
- `/cart` - Shopping cart
- `/payment` - Checkout page
- `/about` - About Us
- `/faq` - FAQ
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/contact` - Contact Us
- `/tablets` - Tablets category
- `/blog` - Blog page
- `/joomla` - Joomla resources
- `/joomshopping` - Joomshopping page
- `/pages` - Pages directory

## 🎨 Color Scheme

- **Primary Red**: `#d44145`
- **Gradient**: `from-pink-500 to-orange-400`
- **Background**: Gray-50, White
- **Text**: Gray-900, Gray-700
- **Footer**: `#143d49`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ✨ Special Features

- **Auto-sliding Banner**: Banner carousel with 5-second intervals
- **Countdown Timer**: Sale section with live countdown
- **Image Gallery**: Product image gallery with thumbnails
- **Quick View**: Modal for quick product preview
- **Wishlist**: Add/remove products from wishlist
- **Newsletter**: Email subscription form
- **Testimonials**: Customer review section
- **Statistics**: Business statistics display

## 🔧 Development

The project uses:
- **ESLint** for code linting
- **PostCSS** for CSS processing
- **Autoprefixer** for browser compatibility
- **Vite** for fast development and building

## 📝 License

This project is private and proprietary.

## 👨‍💻 Developer

Designed and developed by Chandon Kumar

## 🚀 Getting Started

1. Install all dependencies
2. Run `npm run dev` to start development server
3. Open browser to `http://localhost:5173`
4. Start building and customizing!

---

**Go Store** - Your one-stop shop for quality products! 🛒
