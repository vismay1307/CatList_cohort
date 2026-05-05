import { useState, useEffect } from 'react'

const CatList = () => {
  const [cat, setCat] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchCat = async () => {
    setLoading(true)
    try {
      const res = await fetch("https://api.freeapi.app/api/v1/public/cats/cat/random")
      const data = await res.json()
      setCat(data.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const fetchCat = async () => {
    setLoading(true)
    try {
      const res = await fetch("https://api.freeapi.app/api/v1/public/cats/cat/random")
      const data = await res.json()
      setCat(data.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
    fetchCat()
  }, [])

  return (
    <div className="min-h-screen bg-[#0f0f13] flex flex-col items-center justify-center py-10 px-4">

      {loading ? (
        <div className="w-full max-w-sm">
          <div className="rounded-2xl border border-white/8 bg-white/5 overflow-hidden animate-pulse">
            <div className="h-72 bg-white/10" />
            <div className="p-5 space-y-3">
              <div className="h-4 bg-white/10 rounded-full w-1/3" />
              <div className="h-3 bg-white/8 rounded-full w-full" />
              <div className="h-3 bg-white/8 rounded-full w-4/5" />
              <div className="h-3 bg-white/8 rounded-full w-3/5" />
            </div>
          </div>
        </div>
      ) : cat && (
        <div className="w-full max-w-sm">
          <div className="rounded-2xl border border-white/8 bg-white/5 overflow-hidden">

            {/* Image */}
            <div className="relative">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-72 object-cover"
              />
              {/* Name overlay at bottom of image */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent px-5 py-4">
                <h2 className="text-white text-xl font-semibold">{cat.name}</h2>
                <p className="text-slate-300 text-xs mt-0.5">{cat.origin} · {cat.country_code}</p>
              </div>
            </div>

            <div className="p-5 space-y-4">

              {/* Description */}
              <p className="text-slate-400 text-xs leading-relaxed">{cat.description}</p>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-slate-300">
                  ⚖️ {cat.weight?.metric} kg
                </span>
                <span className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-slate-300">
                  🕐 {cat.life_span} yrs
                </span>
                <span className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-slate-300">
                  💬 {cat.temperament}
                </span>
              </div>

              <div className="border-t border-white/5" />

              {/* Links + fetch button */}
              <div className="flex gap-2">
                {cat.vetstreet_url && (
                  <a href={cat.vetstreet_url} target="_blank" rel="noreferrer"
                     className="flex-1 text-center text-xs py-2 rounded-lg border border-white/10 text-slate-400 hover:bg-white/5 transition-colors">
                    Vetstreet
                  </a>
                )}
                {cat.wikipedia_url && (
                  <a href={cat.wikipedia_url} target="_blank" rel="noreferrer"
                     className="flex-1 text-center text-xs py-2 rounded-lg border border-white/10 text-slate-400 hover:bg-white/5 transition-colors">
                    Wikipedia
                  </a>
                )}
              </div>

              <button
                onClick={fetchCat}
                className="w-full py-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/30
                           text-indigo-300 text-sm font-medium hover:bg-indigo-500/30
                           active:scale-95 transition-all"
              >
                🐾 Fetch random cat
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CatList