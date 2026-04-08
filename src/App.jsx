export default function HisAndHersBeautyStore() {
  const products = [
    {
      name: 'Premium Wigs',
      description: 'Quality wig styles for everyday wear and special occasions.',
      price: '$49+',
      image:
        'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Hair Care',
      description: 'Shampoos, conditioners, oils, and styling products for healthy hair.',
      price: '$12+',
      image:
        'https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Cosmetics',
      description: 'Beauty essentials including makeup, lashes, and finishing touches.',
      price: '$8+',
      image:
        'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80',
    },
  ]

  return (
    <div className="min-h-screen bg-stone-100 text-gray-900">
      <header className="border-b-4 border-yellow-400 bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tight">
              <span className="text-blue-700">His &amp; Hers</span>{' '}
              <span className="text-rose-600">Beauty Supply</span>
            </h1>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">
              Wigs • Hair • Cosmetics
            </p>
          </div>
          <nav className="hidden gap-6 text-sm font-bold uppercase md:flex">
            <a href="#home" className="hover:text-blue-700">Home</a>
            <a href="#products" className="hover:text-rose-600">Products</a>
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#contact" className="hover:text-rose-600">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="border-b border-stone-300 bg-gradient-to-b from-stone-200 to-stone-100"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 inline-block bg-yellow-400 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.25em] text-black">
                Local Beauty Favorites
              </p>
              <h2 className="mb-5 text-4xl font-black uppercase leading-tight md:text-5xl">
                Beauty products for
                <span className="block text-blue-700">His &amp; Hers</span>
              </h2>
              <p className="mb-8 max-w-xl text-lg text-gray-700">
                              His Style. Her Beauty. One Store.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="rounded-xl bg-rose-600 px-6 py-3 text-sm font-bold uppercase text-white shadow hover:bg-rose-700"
                >
                  Shop Products
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border-2 border-blue-700 px-6 py-3 text-sm font-bold uppercase text-blue-700 hover:bg-blue-700 hover:text-white"
                >
                  Visit Store
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-3xl border-4 border-stone-300 bg-white p-8 shadow-xl">
                <div className="rounded-2xl bg-stone-200 p-8 text-center shadow-inner">
                  <h3 className="text-4xl font-black uppercase leading-none">
                    <span className="block text-blue-700">His &amp; Hers</span>
                    <span className="mt-2 block text-rose-600">Beauty Supply</span>
                  </h3>
                  <div className="mx-auto mt-6 inline-block bg-gray-800 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.2em] text-yellow-400">
                    Wigs • Hair • Cosmetics
                  </div>
                </div>
                <p className="mt-5 text-center text-gray-600">

                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-blue-700">
                Featured Categories
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase">What We Carry</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {products.map((product) => (
                <div key={product.name} className="rounded-3xl border-2 border-stone-200 bg-stone-50 p-6 shadow-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mb-4 h-40 w-full rounded-2xl object-cover"
                  />
                  <h3 className="text-xl font-black uppercase">{product.name}</h3>
                  <p className="mt-2 text-gray-600">{product.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-lg font-black text-gray-900">{product.price}</span>
                    <button className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-bold uppercase text-white hover:bg-black">
                      View More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-stone-200 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-3xl border-2 border-stone-300 bg-white p-10 shadow-sm">
              <h2 className="text-3xl font-black uppercase text-gray-900">About His &amp; Hers Beauty Supply</h2>
              <p className="mt-4 max-w-3xl text-gray-700">
                His &amp; Hers Beauty Supply is a neighborhood beauty store offering wigs, hair
                products, and cosmetics in one convenient place. 
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-900 py-20 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-yellow-400">Come See Us</p>
            <h2 className="mt-3 text-3xl font-black uppercase">Visit His &amp; Hers</h2>
            <div className="mt-4 space-y-2 text-gray-300">
              <p>612 S Burnside Ave Suite B</p>
              <p>Gonzales, LA 70737</p>
              <p>225-644-1879</p>
            </div>
            <div className="mt-8 rounded-2xl border border-gray-700 bg-gray-800/70 p-6 text-left">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-yellow-400">Store Hours</p>
              <div className="mt-4 space-y-2 text-gray-300">
                <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black py-6 text-center text-sm font-medium text-gray-400">
        © 2026 His &amp; Hers Beauty Supply. All rights reserved.
      </footer>
    </div>
  )
}
