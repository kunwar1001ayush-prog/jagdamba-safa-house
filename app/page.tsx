'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Dialog,
  Input
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'

import { PRODUCTS } from "@/lib/product";
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedCategories from './components/FeaturedCategories'
import BestSellers from './components/BestSellers'
import BrandStory from './components/BrandStory'
import CollectionBanners from './components/CollectionBanners'
import Customization from './components/Customization'
import Newsletter from './components/Newsletter'
import ShopPage from './components/ShopPage'
import ProductDetailPage from './components/ProductDetailPage'
import CheckoutPage from './components/CheckoutPage'
import WishlistPage from './components/WishlistPage'
import Footer from './components/Footer'
import CartSheet from './components/CartSheet'
import Testimonials from './components/Testimonials'
import InstagramGallery from './components/InstagramGallery'

  const CATEGORIES = [
    { name: "Men's Collection", image: '/assets/b12.png', tagline: 'Royal silhouettes' },
    { name: "Bandhgala", image: '/assets/b3.png', tagline: 'Timeless grace' },
    { name: 'Wedding Collection', image: '/assets/b6.png', tagline: 'For the most sacred day' },
    { name: 'Sherwani', image: '/assets/b7.png', tagline: 'Celebrate in heritage' },
    { name: 'Rajputana Bandhgala', image: '/assets/b30.png', tagline: 'The finishing touch' },
    { name: 'New Arrivals', image: '/assets/b31.png', tagline: 'Just unveiled' }
  ];

   const TESTIMONIALS = [
    { name: 'Anaya Kapoor', city: 'Mumbai', text: 'My bridal lehenga was beyond a dress — it was an heirloom. Every stitch told a story.', rating: 5 },
    { name: 'Vikram Singh', city: 'Jaipur', text: 'The sherwani fit like it was sculpted on me. Old-world craftsmanship, modern silhouette.', rating: 5 },
    { name: 'Priya Mehta', city: 'London', text: 'Their team turned my Pinterest dreams into reality. The customization process was a dream.', rating: 5 },
    { name: 'Arjun Reddy', city: 'Hyderabad', text: 'Impeccable tailoring, royal detailing. This is luxury done right.', rating: 5 }
  ];

   const PRODUCTS = [
  { 
    id: 'p1', 
    name: 'Bandhgala Suit', 
    category: "Men's Collection", 
    collection: 'Wedding', 
    price: 84500, 
    originalPrice: 95000, 
    rating: 4.9, 
    reviews: 124, 
    image: '/assets/b20.png', 
    images: ['/assets/b20.png','/assets/b20.png'], 
    description: 'A classic bandhgala suit featuring royal motifs and exquisite craftsmanship. Perfectly tailored for grand occasions.', 
    material: 'Premium Wool Blend, Silk Lining', 
    care: 'Dry clean only.', 
    sizes: ['38','40','42','44','46'], 
    colors: ['Beige','Tan'], 
    tag: '' 
  },
  { 
    id: 'p2', 
    name: 'Sanganeri Shirts', 
    category: "Men's Collection", 
    collection: 'Festive', 
    price: 24500, 
    originalPrice: 28000, 
    rating: 4.8, 
    reviews: 89, 
    image: '/assets/b21.png', 
    images: ['/assets/b21.png','/assets/b21.png'], 
    description: 'Elegant longline silk-blend achkan style outfit featuring traditional patterns and detailed sleeve embroidery.', 
    material: 'Raw Silk Blend', 
    care: 'Dry clean recommended.', 
    sizes: ['S','M','L','XL','XXL'], 
    colors: ['Gold','Cream'], 
    tag: '' 
  },
  { 
    id: 'p3', 
    name: 'Mojdi', 
    category: "Men's Collection", 
    collection: 'Luxury Essentials', 
    price: 38900, 
    originalPrice: 45000, 
    rating: 4.7, 
    reviews: 56, 
    image: '/assets/b22.png', 
    images: ['/assets/b22.png','/assets/b22.png'], 
    description: 'Sophisticated textured hunting jacket styled bandhgala with structured patch pockets for a sharp, heritage look.', 
    material: 'Textured Tweed Suede', 
    care: 'Dry clean only.', 
    sizes: ['38','40','42','44'], 
    colors: ['Dark Chocolate','Charcoal'], 
    tag: '' 
  },
  { 
    id: 'p4', 
    name: 'Jhodhpuri Outfit', 
    category: "Men's Collection", 
    collection: 'Luxury Essentials', 
    price: 14500, 
    originalPrice: 17000, 
    rating: 4.6, 
    reviews: 73, 
    image: '/assets/b23.png', 
    images: ['/assets/b23.png'], 
    description: 'A contemporary take on the classic Jodhpuri uniform featuring a belted waist and structured utility heritage pockets.', 
    material: 'Premium Suiting Fabric', 
    care: 'Dry clean only.', 
    sizes: ['S','M','L','XL'], 
    colors: ['Taupe','Beige'], 
    tag: '' 
  },
  { 
    id: 'p5', 
    name: 'White Breeches Suit', 
    category: "Men's Collection", 
    collection: 'Luxury Essentials', 
    price: 32500, 
    originalPrice: 36000, 
    rating: 4.8, 
    reviews: 41, 
    image: '/assets/b24.png', 
    images: ['/assets/b24.png'], 
    description: 'Immaculate white Jodhpuri suit with patterned cuff lining and classic pocket layouts.', 
    material: 'Premium Cotton-Poly Blend', 
    care: 'Dry clean only.', 
    sizes: ['38','40','42','44','46'], 
    colors: ['White'], 
    tag: '' 
  },
  { 
    id: 'p6', 
    name: 'Classic Beige Waistcoat Set', 
    category: "Men's Collection", 
    collection: 'Wedding', 
    price: 185000, 
    originalPrice: 210000, 
    rating: 5.0, 
    reviews: 67, 
    image: '/assets/b25.png', 
    images: ['/assets/b25.png','/assets/b25.png','/assets/p12.png'], 
    description: 'A bespoke bandhgala waistcoat paired with a contrasting red pocket square for an understated regal statement.', 
    material: 'Khadi Silk, Premium Lining', 
    care: 'Professional dry clean only.', 
    sizes: ['XS','S','M','L','XL'], 
    colors: ['Beige','Fawn'], 
    tag: 'Couture' 
  },
  { 
    id: 'p7', 
    name: 'Striped Double-Breasted Jacket', 
    category: "Men's Collection", 
    collection: 'Festive', 
    price: 56500, 
    originalPrice: 65000, 
    rating: 4.9, 
    reviews: 102, 
    image: '/assets/b26.png', 
    images: ['/assets/b26.png','/assets/b26.png'], 
    description: 'Modern double-breasted velvet blazer paired with a colorful diagonal striped heritage scarf and pocket square.', 
    material: 'Premium Velvet', 
    care: 'Dry clean only.', 
    sizes: ['XS','S','M','L','XL'], 
    colors: ['Midnight Black'], 
    tag: 'Bestseller' 
  },
  { 
    id: 'p8', 
    name: 'Royal Wine Bandhgala', 
    category: "Men's Collection", 
    collection: 'Luxury Essentials', 
    price: 42500, 
    originalPrice: 48000, 
    rating: 4.8, 
    reviews: 88, 
    image: '/assets/b28.png', 
    images: ['/assets/b28.png'], 
    description: 'Deep wine/burgundy high-collared bandhgala suit with sleek contrast buttons and white pocket square accent.', 
    material: 'Premium Italian Blend', 
    care: 'Dry clean only.', 
    sizes: ['Free Size'], 
    colors: ['Wine','Burgundy'], 
    tag: '' 
  },
  { 
    id: 'p9', 
    name: 'Handcrafted Polki Set', 
    category: 'Accessories', 
    collection: 'Wedding', 
    price: 96500, 
    originalPrice: 110000, 
    rating: 5.0, 
    reviews: 34, 
    image: '/assets/b15.png', 
    images: ['/assets/b15.png'], 
    description: 'Traditional multi-colored wedding safa/turban styled alongside heritage accessories for a complete groom appearance.', 
    material: 'Silk Kota, Traditional Dyes', 
    care: 'Keep away from moisture.', 
    sizes: ['One Size'], 
    colors: ['Multi-color Leheriya'], 
    tag: 'Limited' 
  },
  { 
    id: 'p10', 
    name: 'Embroidered Mojari', 
    category: 'Accessories', 
    collection: 'Festive', 
    price: 8500, 
    originalPrice: 10000, 
    rating: 4.7, 
    reviews: 56, 
    image: '/assets/b16.png', 
    images: ['/assets/b16.png'], 
    description: 'Classic fawn bandhgala paired effortlessly with an orange royal Rajasthani safa.', 
    material: 'Raw Silk, Premium Cotton Turban', 
    care: 'Dry clean only.', 
    sizes: ['UK 6','UK 7','UK 8','UK 9','UK 10'], 
    colors: ['Beige / Orange Turban'], 
    tag: '' 
  },
  { 
    id: 'p11', 
    name: 'Zardozi Clutch', 
    category: 'Accessories', 
    collection: 'Festive', 
    price: 12500, 
    originalPrice: 15000, 
    rating: 4.8, 
    reviews: 42, 
    image: '/assets/b17.png', 
    images: ['/assets/b17.png'], 
    description: 'Full-length royal black achkan sherwani with contrast crimson sash and matching custom wedding safa.', 
    material: 'Premium Suiting Silk Velvet', 
    care: 'Handle with care.', 
    sizes: ['One Size'], 
    colors: ['Black / Crimson'], 
    tag: 'New' 
  },
  { 
    id: 'p12', 
    name: 'Jodhpuri', 
    category: "Men's Collection", 
    collection: 'Wedding', 
    price: 225000, 
    originalPrice: 265000, 
    rating: 4.9, 
    reviews: 28, 
    image: '/assets/b18.png', 
    images: ['/assets/b18.png'], 
    description: 'Despite the placeholder name, this features a classic safari-style Jodhpuri coat with utility pockets paired beautifully with a dual-tone red-and-green safa.', 
    material: 'Premium Suede Blend', 
    care: 'Dry clean only.', 
    sizes: ['XS','S','M','L','XL'], 
    colors: ['Beige','Tan'], 
    tag: 'Couture' 
  }
];

   const INSTAGRAM_GALLERY = [
    '/assets/b19.png',
    '/assets/b15.png',
    '/assets/b10.png',
    '/assets/b18.png',
    '/assets/b5.png',
    '/assets/b27.png',
    '/assets/b29.png',
    '/assets/b32.png'
  ];

   const COLLECTION_BANNERS = [
    { title: 'The Wedding Edit', subtitle: 'Heirlooms in the making', image: '/assets/b31.png' },
    { title: 'Festive Collection', subtitle: 'Light. Lustre. Legacy.', image: '/assets/b30.png' },
    { title: 'Luxury Essentials', subtitle: 'Timeless silhouettes', image: '/assets/b22.png' },
    { title: 'Limited Edition', subtitle: 'Numbered & signed', image: '/assets/b28.png' }
  ];

const INR = (n:number) =>
  '₹' + n.toLocaleString('en-IN')


export default function Page() {

  const [view,setView] = useState<
    | 'home'
    | 'shop'
    | 'product'
    | 'checkout'
    | 'wishlist'
    | 'customization'
    | 'thanks'
  >('home')


  const [activeProduct,setActiveProduct] = useState<any>(null)

  const [initialCat,setInitialCat] = useState<string | null>(null)


  const [cart,setCart] = useState<any[]>([])
  const [wishlist,setWishlist] = useState<number[]>([])

  const [cartOpen,setCartOpen] = useState(false)

  const [searchOpen,setSearchOpen] = useState(false)
  const [searchQ,setSearchQ] = useState('')

  const [orderConfirm,setOrderConfirm] = useState<any>(null)

 



  useEffect(()=>{

    const c =
      JSON.parse(
        localStorage.getItem('cart') || '[]'
      )

    const w =
      JSON.parse(
        localStorage.getItem('wishlist') || '[]'
      )


    setCart(c)
    setWishlist(w)

  },[])



  useEffect(()=>{

    localStorage.setItem(
      'cart',
      JSON.stringify(cart)
    )

  },[cart])


  useEffect(()=>{

    localStorage.setItem(
      'wishlist',
      JSON.stringify(wishlist)
    )

  },[wishlist])



  useEffect(()=>{

    window.scrollTo({
      top:0,
      behavior:'smooth'
    })

  },[view])




  function addToCart(
    product:any,
    qty=1,
    size?:string,
    color?:string
  ){

    const s =
      size || product.sizes[0]

    const c =
      color || product.colors[0]


    const cartId =
      `${product.id}-${s}-${c}`


    setCart(prev=>{

      const exist =
        prev.find(
          x=>x.cartId===cartId
        )


      if(exist){

        return prev.map(x=>
          x.cartId===cartId
          ?
          {
            ...x,
            qty:x.qty+qty
          }
          :
          x
        )

      }
      return [
        ...prev,
        {
          cartId,
          id:product.id,
          name:product.name,
          image:product.image,
          price:product.price,
          qty,
          size:s,
          color:c
        }
      ]

    })

  }





  function toggleWishlist(product:any){

    setWishlist(prev=>{

      if(prev.includes(product.id)){

        return prev.filter(
          id=>id!==product.id
        )

      }


      return [
        ...prev,
        product.id
      ]

    })

  }





  async function placeOrder(data:any){

    try{

      const res =
        await fetch(
          '/api/orders',
          {
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:
              JSON.stringify(data)
          }
        )


      const json =
        await res.json()


      setOrderConfirm(
        json.order
      )

    }

    catch{

      setOrderConfirm({
        id:'demo-'+Date.now()
      })

    }


    setCart([])

    setView('thanks')

  }





  return (

    <div className="
      min-h-screen
      bg-[#F8F5EF]
      
      text-[#111]
    ">


      <Header

        onNav={(v:any)=>
          setView(v)
        }

        cartCount={
          cart.reduce(
            (s,i)=>s+i.qty,
            0
          )
        }

        wishlistCount={
          wishlist.length
        }

        onCartOpen={()=>
          setCartOpen(true)
        }

        onSearchOpen={()=>
          setSearchOpen(true)
        }

      />



      <AnimatePresence mode="wait">


      <motion.main

        key={view}

        initial={{
          opacity:0
        }}

        animate={{
          opacity:1
        }}

        exit={{
          opacity:0
        }}

      >


      {
      view==='home' &&

      <>

      <Hero
        onShop={()=>
          setView('shop')
        }
      />


      <FeaturedCategories
       categories={CATEGORIES}

        onCategory={(c:string)=>{

          setInitialCat(c)

          setView('shop')

        }}

      />


      <BestSellers

        products={PRODUCTS}

        onView={(p:any)=>{
          setActiveProduct(p)
          setView('product')
        }}

        onAdd={addToCart}

        onWishlist={toggleWishlist}

        wishlist={wishlist}

      />


      <BrandStory/>

      <CollectionBanners
       banners={COLLECTION_BANNERS}
        onShop={()=>
          setView('shop')
        }
      />


      <Customization/>

      <InstagramGallery images={INSTAGRAM_GALLERY}/>

      <Testimonials testimonials={TESTIMONIALS}/>

      <Newsletter/>

      </>

      }



      {
      view==='shop' &&

      <ShopPage
        products={PRODUCTS}

        initialCat={initialCat}

        onView={(p:any)=>{

          setActiveProduct(p)

          setView('product')

        }}

        onAdd={addToCart}

        onWishlist={toggleWishlist}

        wishlist={wishlist}

      />

      }




      {
      view==='product' &&
      activeProduct &&

      <ProductDetailPage

        product={activeProduct}

        onAdd={addToCart}

        onBuy={(p:any,q:number,s:string,c:string)=>{

          addToCart(p,q,s,c)

          setView('checkout')

        }}

        onWishlist={toggleWishlist}

        wishlist={wishlist}

        onBack={()=>
          setView('shop')
        }

      />

      }





      {
      view==='checkout' &&

      <CheckoutPage

        cart={cart}

        onPlace={placeOrder}

        onBack={()=>
          setView('shop')
        }

      />

      }




      {
      view==='wishlist' &&

      <WishlistPage

        wishlist={wishlist}

        onView={(p:any)=>{

          setActiveProduct(p)

          setView('product')

        }}

        onAdd={addToCart}

        onWishlist={toggleWishlist}

      />

      }





      {
      view==='customization' &&
      <Customization/>
      }



      {
      view==='thanks' &&


      <section className="
        py-24
        text-center
      ">


      <h1 className="
        font-serif-display
        text-5xl
      ">

      Order placed

      </h1>


      <p className="mt-5">

      Order ID:
      {' '}
      {orderConfirm?.id}

      </p>


      <Button

      className="
      mt-10
      bg-[#111]
      text-white
      "

      onClick={()=>
        setView('home')
      }

      >

      Continue Shopping

      </Button>


      </section>


      }


      </motion.main>


      </AnimatePresence>





      <Footer/>




      <CartSheet

        open={cartOpen}

        onClose={setCartOpen}

        cart={cart}

        onUpdate={(id:string,qty:number)=>

          setCart(prev=>
            prev.map(i=>
              i.cartId===id
              ?
              {...i,qty}
              :
              i
            )
          )

        }

        onRemove={(id:string)=>

          setCart(prev=>
            prev.filter(
              i=>i.cartId!==id
            )
          )

        }


        onCheckout={()=>{

          setCartOpen(false)

          setView('checkout')

        }}

      />



    </div>

  )

}