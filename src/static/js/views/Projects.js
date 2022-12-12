import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("leehoward.dev | Projects");
    }

    async getHtml() {
        return `
        <h3>Who is behind this program?</h3>

        <table>
        <thead>
        <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Contact</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>Joel Savitz</td>
        <td>Software Engineer &amp; Program Lead</td>
        <td> <a href="https://joelsavitz.com">Joel&rsquo;s Website</a></td>
        </tr>
        <tr>
        <td>Julia Denham</td>
        <td>Software Engineer &amp; Program Manager </td>
        <td> <a href="https://www.linkedin.com/in/julia-denham-4828a5120/">Julia&rsquo;s Linkedin</a></td>
        </tr>
        <tr>
        <td>Charles &ldquo;Charlie&rdquo; Mirabile</td>
        <td>Associate Software Engineer &amp; Content Lead</td>
        <td> <a href="https://github.com/charliemirabile">Charlie&rsquo;s Github</a></td>
        </tr>
        <tr>
        <td>Charles &ldquo;Charlie&rdquo; Mirabile</td>
        <td>Associate Software Engineer &amp; Content Lead</td>
        <td> <a href="https://github.com/charliemirabile">Charlie&rsquo;s Github</a></td>
        </tr>
        <tr>
        <td>Charles &ldquo;Charlie&rdquo; Mirabile</td>
        <td>Associate Software Engineer &amp; Content Lead</td>
        <td> <a href="https://github.com/charliemirabile">Charlie&rsquo;s Github</a></td>
        </tr>
        <tr>
        <td>Charles &ldquo;Charlie&rdquo; Mirabile</td>
        <td>Associate Software Engineer &amp; Content Lead</td>
        <td> <a href="https://github.com/charliemirabile">Charlie&rsquo;s Github</a></td>
        </tr>
        <tr>
        <td>Charles &ldquo;Charlie&rdquo; Mirabile</td>
        <td>Associate Software Engineer &amp; Content Lead</td>
        <td> <a href="https://github.com/charliemirabile">Charlie&rsquo;s Github</a></td>
        </tr>
        <tr>
        <td>Charles &ldquo;Charlie&rdquo; Mirabile</td>
        <td>Associate Software Engineer &amp; Content Lead</td>
        <td> <a href="https://github.com/charliemirabile">Charlie&rsquo;s Github</a></td>
        </tr>
        <tr>
        <td>Charles &ldquo;Charlie&rdquo; Mirabile</td>
        <td>Associate Software Engineer &amp; Content Lead</td>
        <td> <a href="https://github.com/charliemirabile">Charlie&rsquo;s Github</a></td>
        </tr>
        <tr>
        <td>Charles &ldquo;Charlie&rdquo; Mirabile</td>
        <td>Associate Software Engineer &amp; Content Lead</td>
        <td> <a href="https://github.com/charliemirabile">Charlie&rsquo;s Github</a></td>
        </tr>
        <tr>
        <td>Charles &ldquo;Charlie&rdquo; Mirabile</td>
        <td>Associate Software Engineer &amp; Content Lead</td>
        <td> <a href="https://github.com/charliemirabile">Charlie&rsquo;s Github</a></td>
        </tr>
        <tr>
        <td>Charles &ldquo;Charlie&rdquo; Mirabile</td>
        <td>Associate Software Engineer &amp; Content Lead</td>
        <td> <a href="https://github.com/charliemirabile">Charlie&rsquo;s Github</a></td>
        </tr>
        <tr>
        <td>Charles &ldquo;Charlie&rdquo; Mirabile</td>
        <td>Associate Software Engineer &amp; Content Lead</td>
        <td> <a href="https://github.com/charliemirabile">Charlie&rsquo;s Github</a></td>
        </tr>
        <tr>
        <td>Charles &ldquo;Charlie&rdquo; Mirabile</td>
        <td>Associate Software Engineer &amp; Content Lead</td>
        <td> <a href="https://github.com/charliemirabile">Charlie&rsquo;s Github</a></td>
        </tr>
        <tr>
        <td>Charles &ldquo;Charlie&rdquo; Mirabile</td>
        <td>Associate Software Engineer &amp; Content Lead</td>
        <td> <a href="https://github.com/charliemirabile">Charlie&rsquo;s Github</a></td>
        </tr>
        <tr>
        <td>Charles &ldquo;Charlie&rdquo; Mirabile</td>
        <td>Associate Software Engineer &amp; Content Lead</td>
        <td> <a href="https://github.com/charliemirabile">Charlie&rsquo;s Github</a></td>
        </tr>
        <tr>
        <td>Charles &ldquo;Charlie&rdquo; Mirabile</td>
        <td>Associate Software Engineer &amp; Content Lead</td>
        <td> <a href="https://github.com/charliemirabile">Charlie&rsquo;s Github</a></td>
        </tr>
        <tr>
        <td>Charles &ldquo;Charlie&rdquo; Mirabile</td>
        <td>Associate Software Engineer &amp; Content Lead</td>
        <td> <a href="https://github.com/charliemirabile">Charlie&rsquo;s Github</a></td>
        </tr>
        <tr>
        <td>Charles &ldquo;Charlie&rdquo; Mirabile</td>
        <td>Associate Software Engineer &amp; Content Lead</td>
        <td> <a href="https://github.com/charliemirabile">Charlie&rsquo;s Github</a></td>
        </tr>
        </tbody>
        </table>
        
        `;
    }
}