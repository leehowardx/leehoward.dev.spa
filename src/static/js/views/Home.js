import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("leehoward.dev | Home");
    }

    async getHtml() {
        return `
        <h3>TL;DR:</h3>

        <p>The Kernel Development Learning Pipeline (KDLP) program aims to create a comprehensive Linux kernel talent pipeline to address the current shortage of qualified entry level kernel candidates.</p>
        
        <h3>The What</h3>
        
        <p>Kernel Development Learning Pipeline (KDLP) is a program composed of two primary aspects.</p>
        
        <p><strong>The first</strong> is a program to develop a comprehensive Linux kernel education, mentoring, onboarding, and a talent development pipeline.</p>

        <p><a href="https://github.com">explore github</a></p>
        
        <p><strong>The second</strong> is an open source initiative to improve Fedora Linux on the Raspberry Pi.</p>
        
        <p>With our team of associates, interns and mentors, we are:</p>
        
        <ul>
        <li>Developing an individually-driven kernel engineering skills training program and talent pipeline.</li>
        <li>Broadening the accessibility of the Linux kernel engineering space to include people from backgrounds where they otherwise would not be exposed.</li>
        <li>Giving students a relatively unique (for academia) hands-on software engineering experience that they otherwise would not get without first obtaining an internship.</li>
        <li>Improving Fedora Linux usability, stability, and performance on the Raspberry Pi, a platform on which Fedora&rsquo;s status quo demands engineering attention.</li>
        <li>Producing up to date open source Linux kernel education materials and content to go along with Red Hat’s open source software, solving the common problem of stale documentation.</li>
        <li>Providing opportunities for public speaking and mentorship for engineers at any level of experience, from interns leading class sessions to Distinguished Engineers adding unique wisdom to any and all content.</li>
        </ul>
        
        
        <p>The virtual and distributed nature of our program empowers us to include students from a diverse range of backgrounds. Not only can we offer this program to college students, we can include ambitious and advanced high school students, self-studying engineers, and determined career-switchers. We provide the rigorous standards, mentorship, and hardware, and the students bring their grit, intensity, and determination to succeed.</p>
        
        <h3>Frequently Asked Questions (FAQ):</h3>
        
        <p>Q: How can I join?</p>
        
        <p>A: <a href="https://groups.google.com/forum/#!forum/rh-kdlp/join">Join our mailing list</a> to chat and recieve occasional updates.</p>
        
        <p>Q: Where can I disucuss Linux kernel development with like-minded people?</p>
        
        <p>A: <a href="https://discord.gg/CFpuxqYgHM">Join our discord server</a></p>
        
        <p>Q: What is this group up to?</p>
        
        <p>A: <a href="https://github.com/orgs/underground-software/projects/2">Check out our GitHub project</a></p>
        
        <p>Q: Who is behind this program?</p>
        
        <p>A: <a href="who.html">These people</a></p>
        
        <h3>Fun fact</h3>
        
        <p>You can view this website in a CLI browser (such as <a href="https://lynx.invisible-island.net/lynx2.8.9/index.html">lynx</a>)</p>
            
        `;
    }
}