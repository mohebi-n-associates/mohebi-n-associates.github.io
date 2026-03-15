import Link from 'next/link';
import Image from 'next/image';
import { Mail, Github, Twitter, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-800/50 bg-[#060a12]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <Image src="/images/logo.png" alt="Mohebi Lab" width={28} height={28} />
                            <span className="text-lg font-bold text-white">Mohebi Lab</span>
                        </div>
                        <p className="text-slate-500 leading-relaxed text-sm mb-6 max-w-sm">
                            Cognitive neuroscience lab at the University of Wisconsin-Madison investigating how neuromodulatory signals influence learning and decision-making.
                        </p>
                        <div className="flex gap-3">
                            <Link href="mailto:amohebi@wisc.edu" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-colors">
                                <Mail className="w-4 h-4" />
                            </Link>
                            <Link href="https://twitter.com/mohebial" target="_blank" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-colors">
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link href="https://github.com/mohebi-lab" target="_blank" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-colors">
                                <Github className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Research */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Research</h4>
                        <ul className="space-y-2.5">
                            <li><Link href="/research" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Research Areas</Link></li>
                            <li><Link href="/techniques" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Techniques</Link></li>
                            <li><Link href="/publications" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Publications</Link></li>
                            <li><Link href="/resources" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Resources</Link></li>
                        </ul>
                    </div>

                    {/* Lab */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Lab</h4>
                        <ul className="space-y-2.5">
                            <li><Link href="/people" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">People</Link></li>
                            <li><Link href="/news" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">News</Link></li>
                            <li><Link href="/courses" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Courses</Link></li>
                            <li><Link href="/funding" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Funding</Link></li>
                            <li><Link href="/join" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Join Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Contact</h4>
                        <div className="flex items-start gap-2.5 text-sm text-slate-500">
                            <MapPin className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                            <div>
                                Department of Psychology<br />
                                University of Wisconsin-Madison<br />
                                1202 W Johnson St<br />
                                Madison, WI 53706
                            </div>
                        </div>
                        <div className="mt-4">
                            <Link
                                href="https://psych.wisc.edu/"
                                target="_blank"
                                className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-400 transition-colors"
                            >
                                Department website <ExternalLink className="w-3 h-3" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-900 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
                    <p>&copy; {currentYear} The Board of Regents of the University of Wisconsin System</p>
                    <p>Built with Next.js & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
}
