const footerLinks = [{ name: 'GitHub', href: 'https://github.com/wunder-frau' }]

const Footer = () => {
  return (
    <div className="bg-white py-8 text-gray-900">
      <hr className="my-4 border-t border-gray-300" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <p>
              <span className="font-semibold">Irene Stasheuski</span> &copy;
              2025
            </p>
          </div>
          <div className="flex space-x-4">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                {/* GitHub icon */}
                <i className="fa fa-github h-5 w-5 text-gray-600"></i>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
