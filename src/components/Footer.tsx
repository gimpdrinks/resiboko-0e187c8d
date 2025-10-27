const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-3">ResiboKo</h3>
            <p className="text-white/80 mb-4 max-w-md">
              AI-powered expense tracking made simple for Filipino professionals. 
              Turn receipts and spoken expenses into clear financial insights.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#features" className="hover:text-accent transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-accent transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#download" className="hover:text-accent transition-colors">Download</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#blog" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} ResiboKo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
