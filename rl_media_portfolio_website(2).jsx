export default function RLMediaPortfolio() {
  const gallery = [
    {
      title: "Decathlon Sports Utsav",
      image: "sandbox:/mnt/data/1.JPEG",
    },
    {
      title: "Brand Event Coverage",
      image: "sandbox:/mnt/data/2.JPEG",
    },
    {
      title: "Yoga & Fitness Sessions",
      image: "sandbox:/mnt/data/3.JPEG",
    },
    {
      title: "Outdoor Sports Coverage",
      image: "sandbox:/mnt/data/4.JPEG",
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden font-sans">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="sandbox:/mnt/data/1.JPEG"
            alt="RL Media"
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,140,0,0.15),transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(0,150,255,0.12),transparent_30%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[8px] text-orange-400 mb-4 text-sm">
              Photography • Videography • Cinematic Storytelling
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
              RL
              <span className="block text-orange-400">MEDIA</span>
            </h1>

            <p className="text-gray-300 text-xl leading-relaxed mb-8 max-w-xl">
              We don’t just click pictures — we capture emotions, moments, and
              stories that last forever. RL Media specializes in cinematic
              photography, videography, sports coverage, music videos, and
              premium pre-wedding productions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/917053120268"
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-orange-500 hover:bg-orange-400 transition-all font-bold text-black"
              >
                Book Now
              </a>

              <a
                href="https://www.instagram.com/rohan_loniwala/"
                target="_blank"
                className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all"
              >
                Instagram Portfolio
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/20 blur-3xl rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop"
              alt="Camera"
              className="rounded-[40px] shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 md:px-16 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="sandbox:/mnt/data/4.JPEG"
              alt="RL Team"
              className="rounded-[40px] shadow-2xl border border-white/10"
            />
          </div>

          <div>
            <h2 className="text-5xl font-black mb-8">
              About <span className="text-orange-400">RL Media</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              RL Media is a creative photography and videography production
              group delivering cinematic visuals and unforgettable storytelling.
              From professional sports events to music videos and premium
              pre-wedding shoots, our team creates content that feels alive.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              We have proudly worked with Decathlon Sports Utsav events,
              captured fitness communities, produced 100+ song shoots, and
              delivered engaging visuals for creators, brands, and artists.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black p-6 rounded-3xl border border-white/10">
                <h3 className="text-4xl font-black text-orange-400 mb-2">
                  100+
                </h3>
                <p className="text-gray-400">Song Shoots</p>
              </div>

              <div className="bg-black p-6 rounded-3xl border border-white/10">
                <h3 className="text-4xl font-black text-orange-400 mb-2">
                  50+
                </h3>
                <p className="text-gray-400">Events Covered</p>
              </div>

              <div className="bg-black p-6 rounded-3xl border border-white/10">
                <h3 className="text-4xl font-black text-orange-400 mb-2">
                  1000+
                </h3>
                <p className="text-gray-400">Creative Reels</p>
              </div>

              <div className="bg-black p-6 rounded-3xl border border-white/10">
                <h3 className="text-4xl font-black text-orange-400 mb-2">
                  Unlimited
                </h3>
                <p className="text-gray-400">Creative Vision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 md:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              What We <span className="text-orange-400">Do</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Cinematic visuals designed for brands, artists, events, and
              unforgettable memories.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Photography",
              "Videography",
              "Drone Shoots",
              "Editing & Reels",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-zinc-950 border border-white/10 p-8 rounded-[32px] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-400 text-3xl mb-6">
                  ✦
                </div>
                <h3 className="text-2xl font-bold mb-4">{service}</h3>
                <p className="text-gray-400 leading-relaxed">
                  Premium cinematic production and professional visual
                  storytelling tailored for every project.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 px-6 md:px-16 bg-zinc-950 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
            alt="Background"
            className="w-[500px]"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              Featured <span className="text-orange-400">Work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[40px] border border-white/10"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-all duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-3xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-6 md:px-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1400&auto=format&fit=crop"
            alt="Videography"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              Let’s Create Something <span className="text-orange-400">Amazing</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-zinc-950 p-8 rounded-[32px] border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Contact Numbers</h3>
                <p className="text-gray-300 text-lg">7053120268</p>
                <p className="text-gray-300 text-lg">80768693705</p>
              </div>

              <div className="bg-zinc-950 p-8 rounded-[32px] border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Email</h3>
                <p className="text-gray-300 text-lg break-all">
                  seh.rohan@gmail.com
                </p>
              </div>

              <div className="bg-zinc-950 p-8 rounded-[32px] border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Instagram</h3>
                <a
                  href="https://www.instagram.com/rohan_loniwala/"
                  target="_blank"
                  className="text-orange-400 text-lg hover:underline"
                >
                  @rohan_loniwala
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="bg-white p-6 rounded-[36px] shadow-2xl mb-6">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://wa.me/917053120268"
                  alt="WhatsApp QR"
                  className="rounded-2xl"
                />
              </div>

              <a
                href="https://wa.me/917053120268"
                target="_blank"
                className="px-10 py-5 rounded-2xl bg-orange-500 hover:bg-orange-400 transition-all font-bold text-black text-lg"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10 bg-black text-center">
        <h3 className="text-3xl font-black tracking-widest mb-4">
          RL MEDIA
        </h3>

        <p className="text-gray-500">
          Capture • Create • Inspire
        </p>
      </footer>
    </div>
  );
}
