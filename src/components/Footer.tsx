import Link from 'next/link';
import { Mail, Github, Twitter, MapPin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-800 bg-slate-950/50 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                            Mohebi & Associates
                        </h3>
                        <p className="text-slate-400 leading-relaxed max-w-sm mb-6">
                            Cognitive neuroscience lab at UW-Madison investigating how neuromodulatory signals influence learning and decision-making.
                        </p>
                        <div className="flex gap-4">
                            <Link href="mailto:mohebiassociates@office365.wisc.edu" className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-colors">
                                <Mail className="w-5 h-5" />
                            </Link>
                            <Link href="https://twitter.com/mohebial" target="_blank" className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="https://github.com/mohebi-lab" target="_blank" className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold text-slate-200 mb-4">Laboratory</h4>
                        <ul className="space-y-2">
                            <li><Link href="/research" className="text-slate-400 hover:text-blue-400 transition-colors">Research</Link></li>
                            <li><Link href="/people" className="text-slate-400 hover:text-blue-400 transition-colors">Team</Link></li>
                            <li><Link href="/publications" className="text-slate-400 hover:text-blue-400 transition-colors">Publications</Link></li>
                            <li><Link href="/join" className="text-slate-400 hover:text-blue-400 transition-colors">Join Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-slate-200 mb-4">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                <span className="text-slate-400 text-sm">
                                    Department of Psychology<br />
                                    University of Wisconsin-Madison<br />
                                    1202 W Johnson St<br />
                                    Madison, WI 53706
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {currentYear} The Board of Regents of the University of Wisconsin System</p>
                    <p>Designed with Next.js & Tailwind</p>
                </div>
            </div>
        </footer>
    );
}
