export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-white/5 bg-dark-bg z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs font-body tracking-wide">
            © 2026 Techfest. All rights reserved.
          </p>
          <div className="flex gap-4">
             <a href="#" className="text-gray-500 hover:text-neon-blue transition-colors text-xs">Twitter</a>
             <a href="#" className="text-gray-500 hover:text-neon-purple transition-colors text-xs">Instagram</a>
             <a href="#" className="text-gray-500 hover:text-neon-cyan transition-colors text-xs">LinkedIn</a>
          </div>
          <p className="text-gray-600 text-xs font-body tracking-wide">
            Crafted with <span className="text-neon-blue">♦</span> for the future
          </p>
        </div>
      </div>
    </footer>
  )
}
