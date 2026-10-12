import { ArrowUpRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { email, emailLink } from '@/data/projects';
export function Contact() {
 return <section className="contact-section"><div className="section-label">Let’s connect</div><h2>Good ideas deserve<br/><span className="text-primary">great collaboration.</span></h2><p>Have a project in mind? I’d love to hear about it.</p><Button asChild size="lg" className="mt-7"><a href={emailLink}>Send me a message <ArrowUpRight/></a></Button><a href={emailLink} className="contact-email"><Mail size={15}/><span>{email}</span></a></section>;
}
