import {
  Facebook,
  Instagram,
  Linkedin,
  Send,
  Youtube,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="text-3xl font-bold text-primary">
              {/* Replace with actual logo */}
              <span className="sr-only">Najot Ta'lim Logo</span>⟁
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Kurslar
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Online ta'lim
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">Facebook</span>
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">Instagram</span>
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">Telegram</span>
              <Send size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">YouTube</span>
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between text-sm text-gray-500">
          <p>© "Najot Ta'lim", 2024 - Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center">
            <Phone size={16} className="mr-2" />
            <span>Call-markaz: +998 78 888 9888</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
