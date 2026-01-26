'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Download, Copy, Check, ArrowLeft, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function QRGeneratorPage() {
    const [text, setText] = useState('');
    const [qrGenerated, setQrGenerated] = useState(false);
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const [qrDataUrl, setQrDataUrl] = useState<string>('');

    const maxLength = 2000; // QR codes can store up to ~4000 alphanumeric characters

    const generateQR = async () => {
        if (!text.trim() || text.length > maxLength) return;

        setError(null);
        // Use QR Server API to generate QR code
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`;
        setQrDataUrl(qrUrl);
        setQrGenerated(true);
    };

    const downloadQR = async () => {
        if (!qrDataUrl) return;
        
        setError(null);
        // Direct download link - browser will handle it
        const link = document.createElement('a');
        link.href = qrDataUrl;
        link.download = 'qrcode.png';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const copyQRImage = async () => {
        if (!imgRef.current) return;
        
        setError(null);
        try {
            // Create a canvas to draw the image
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = imgRef.current;
            
            // Wait for image to be loaded
            if (!img.complete) {
                await new Promise((resolve) => {
                    img.onload = resolve;
                });
            }
            
            canvas.width = img.naturalWidth || 300;
            canvas.height = img.naturalHeight || 300;
            
            if (ctx) {
                ctx.drawImage(img, 0, 0);
                canvas.toBlob(async (blob) => {
                    if (blob) {
                        try {
                            await navigator.clipboard.write([
                                new ClipboardItem({ 'image/png': blob })
                            ]);
                            setCopied(true);
                            setTimeout(() => setCopied(false), 2000);
                        } catch {
                            setError('Copying images is not supported in this browser. Try downloading instead.');
                        }
                    }
                }, 'image/png');
            }
        } catch {
            setError('Failed to copy image. Try downloading instead.');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            generateQR();
        }
    };

    return (
        <div className="container mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto"
            >
                {/* Back Link */}
                <Link
                    href="/resources"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Resources
                </Link>

                <div className="text-center mb-12">
                    <div className="inline-flex p-4 rounded-2xl bg-blue-500/10 mb-6">
                        <QrCode className="w-12 h-12 text-blue-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                        QR Code Generator
                    </h1>
                    <p className="text-lg text-slate-400">
                        Generate QR codes for URLs, text, Wi-Fi, contact info, and more.
                    </p>
                </div>

                <div className="glass p-8 rounded-2xl border border-slate-700/50">
                    {/* Input Section */}
                    <div className="mb-6">
                        <label htmlFor="qr-text" className="block text-sm font-medium text-slate-300 mb-2">
                            Enter your content
                        </label>
                        <textarea
                            id="qr-text"
                            value={text}
                            onChange={(e) => {
                                if (e.target.value.length <= maxLength) {
                                    setText(e.target.value);
                                    setQrGenerated(false);
                                }
                            }}
                            onKeyDown={handleKeyDown}
                            placeholder="URL, text, Wi-Fi config (WIFI:T:WPA;S:network;P:password;;), vCard, etc."
                            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent resize-none"
                            rows={3}
                        />
                        <div className="flex justify-between items-center mt-2">
                            <p className="text-xs text-slate-500">
                                Press Enter to generate
                            </p>
                            <p className={`text-sm ${text.length > maxLength ? 'text-red-400' : 'text-slate-500'}`}>
                                {text.length}/{maxLength}
                            </p>
                        </div>
                    </div>

                    {/* Generate Button */}
                    <button
                        onClick={generateQR}
                        disabled={!text.trim() || text.length > maxLength}
                        className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all"
                    >
                        Generate QR Code
                    </button>

                    {/* QR Code Display */}
                    {qrGenerated && qrDataUrl && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mt-8"
                        >
                            <div className="flex flex-col items-center">
                                <div className="p-4 bg-white rounded-2xl mb-6">
                                    <img
                                        ref={imgRef}
                                        src={qrDataUrl}
                                        alt="Generated QR Code"
                                        className="w-[300px] h-[300px]"
                                        crossOrigin="anonymous"
                                    />
                                </div>
                                
                                {/* Error Message */}
                                {error && (
                                    <div className="flex items-center gap-2 text-amber-400 text-sm mb-4">
                                        <AlertCircle className="w-4 h-4" />
                                        {error}
                                    </div>
                                )}
                                
                                {/* Action Buttons */}
                                <div className="flex gap-4">
                                    <button
                                        onClick={downloadQR}
                                        className="flex items-center gap-2 px-6 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-200 rounded-lg transition-colors"
                                    >
                                        <Download className="w-4 h-4" />
                                        Download
                                    </button>
                                    <button
                                        onClick={copyQRImage}
                                        className="flex items-center gap-2 px-6 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-200 rounded-lg transition-colors"
                                    >
                                        {copied ? (
                                            <>
                                                <Check className="w-4 h-4 text-green-400" />
                                                <span className="text-green-400">Copied!</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-4 h-4" />
                                                Copy
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Usage Tips */}
                <div className="mt-8 glass p-6 rounded-xl border border-slate-700/50">
                    <h3 className="text-lg font-semibold text-slate-200 mb-4">Supported Formats</h3>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><span className="text-blue-400 font-medium">URL:</span> https://example.com</li>
                        <li><span className="text-blue-400 font-medium">Text:</span> Any plain text message</li>
                        <li><span className="text-blue-400 font-medium">Wi-Fi:</span> WIFI:T:WPA;S:NetworkName;P:Password;;</li>
                        <li><span className="text-blue-400 font-medium">Email:</span> mailto:email@example.com</li>
                        <li><span className="text-blue-400 font-medium">Phone:</span> tel:+1234567890</li>
                        <li><span className="text-blue-400 font-medium">SMS:</span> sms:+1234567890?body=Hello</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}
