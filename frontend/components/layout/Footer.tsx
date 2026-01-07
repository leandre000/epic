import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dreamize</h3>
            <p className="text-gray-400">
              Your career platform for finding dream jobs and top talent.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/jobs" className="hover:text-white">Browse Jobs</Link></li>
              <li><Link href="/profile" className="hover:text-white">Create Profile</Link></li>
              <li><Link href="/applications" className="hover:text-white">My Applications</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/post-job" className="hover:text-white">Post a Job</Link></li>
              <li><Link href="/companies" className="hover:text-white">Company Profiles</Link></li>
              <li><Link href="/candidates" className="hover:text-white">Find Candidates</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dreamize. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

