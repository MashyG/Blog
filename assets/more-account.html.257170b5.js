import{_ as t,o as l,c as d,d as s,a,w as i,e as n,b as c,r as o}from"./app.a6f56f7f.js";const u={},r=s("h1",{id:"\u914D\u7F6E\u591A\u4E2Agithub\u8D26\u53F7\u4E8E\u672C\u673A",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u914D\u7F6E\u591A\u4E2Agithub\u8D26\u53F7\u4E8E\u672C\u673A","aria-hidden":"true"},"#"),n(" \u914D\u7F6E\u591A\u4E2AGitHub\u8D26\u53F7\u4E8E\u672C\u673A")],-1),h=s("p",null,"\u76EE\u5F55",-1),v={class:"table-of-contents"},p=n("\u67E5\u770B git \u5DF2\u914D\u7F6E\u5217\u8868"),m=n("\u82E5\u5DF2\u5B58\u5728\u5168\u5C40\u7684 git \u914D\u7F6E"),b=n("\u5C06\u521A\u624D\u65B0\u589E\u7684\u4E24\u4E2A\u6216\u591A\u4E2A ssh-key \u653E\u5165 ssh-agent \u4FE1\u4EFB\u5217\u8868\u4E2D"),g=n("\u590D\u5236\u4E24\u4E2A\u6216\u591A\u4E2A\u516C\u94A5\uFF08.pub \u6587\u4EF6\uFF09,\u5206\u522B\u6DFB\u52A0\u5230\u4E0D\u540C\u7684 git \u8D26\u53F7\u4E0B"),k=n("\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A config \u6587\u4EF6\u5230.ssh \u6587\u4EF6\u5939\u4E0B\uFF08\u6CA1\u6709\u5219\u65B0\u5EFA\u4E00\u4E2A\uFF09\uFF0C\u53BB\u914D\u7F6E\u591A\u4E2A github \u8D26\u53F7\u7684\u63A8\u9001\u64CD\u4F5C"),_=n("\u6D4B\u8BD5\u8FDE\u63A5"),f=n("clone"),x=n("\u6CE8\u610F"),y=c(`<h2 id="\u67E5\u770B-git-\u5DF2\u914D\u7F6E\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B-git-\u5DF2\u914D\u7F6E\u5217\u8868" aria-hidden="true">#</a> \u67E5\u770B git \u5DF2\u914D\u7F6E\u5217\u8868</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u82E5\u5DF2\u5B58\u5728\u5168\u5C40\u7684-git-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u82E5\u5DF2\u5B58\u5728\u5168\u5C40\u7684-git-\u914D\u7F6E" aria-hidden="true">#</a> \u82E5\u5DF2\u5B58\u5728\u5168\u5C40\u7684 <code>git</code> \u914D\u7F6E</h2><p>\u53EF\u5220\u9664\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global --unset user.name
<span class="token function">git</span> config --global --unset user.email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u65B0\u589E\u53E6\u5916\u7684 <code>ssh-key</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E00\u76F4\u56DE\u8F66\u5373\u53EF</span>
ssh-keygen -t rsa -C <span class="token string">&quot;github\u8D26\u53F7&quot;</span>
<span class="token comment"># \u9ED8\u8BA4\u751F\u6210\uFF5E/.ssh/id_rsa\uFF08\u5BC6\u94A5\uFF09\u548C.ssh/id_rsa.pub\uFF08\u516C\u94A5\uFF09</span>

<span class="token comment"># \u8FDB\u5165\u5230\uFF5E/.ssh\u76EE\u5F55\u4E0B</span>
ssh-keygen -t rsa -C <span class="token string">&quot;github\u8D26\u53F7&quot;</span> -f \u53E6\u5916\u7684\u6587\u4EF6\u540D
<span class="token comment"># \u751F\u6210\u5BC6\u94A5\u548C\u516C\u94A5\uFF08.pub\uFF09</span>
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5C06\u521A\u624D\u65B0\u589E\u7684\u4E24\u4E2A\u6216\u591A\u4E2A-ssh-key-\u653E\u5165-ssh-agent-\u4FE1\u4EFB\u5217\u8868\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u5C06\u521A\u624D\u65B0\u589E\u7684\u4E24\u4E2A\u6216\u591A\u4E2A-ssh-key-\u653E\u5165-ssh-agent-\u4FE1\u4EFB\u5217\u8868\u4E2D" aria-hidden="true">#</a> \u5C06\u521A\u624D\u65B0\u589E\u7684\u4E24\u4E2A\u6216\u591A\u4E2A <code>ssh-key</code> \u653E\u5165 <code>ssh-agent</code> \u4FE1\u4EFB\u5217\u8868\u4E2D</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-add ~/.ssh/id_rsa
ssh-add ~/.ssh/\u53E6\u5916\u7684\u6587\u4EF6\u540D
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u590D\u5236\u4E24\u4E2A\u6216\u591A\u4E2A\u516C\u94A5-pub-\u6587\u4EF6-\u5206\u522B\u6DFB\u52A0\u5230\u4E0D\u540C\u7684-git-\u8D26\u53F7\u4E0B" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u4E24\u4E2A\u6216\u591A\u4E2A\u516C\u94A5-pub-\u6587\u4EF6-\u5206\u522B\u6DFB\u52A0\u5230\u4E0D\u540C\u7684-git-\u8D26\u53F7\u4E0B" aria-hidden="true">#</a> \u590D\u5236\u4E24\u4E2A\u6216\u591A\u4E2A\u516C\u94A5\uFF08.pub \u6587\u4EF6\uFF09,\u5206\u522B\u6DFB\u52A0\u5230\u4E0D\u540C\u7684 git \u8D26\u53F7\u4E0B</h2><h2 id="\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A-config-\u6587\u4EF6\u5230-ssh-\u6587\u4EF6\u5939\u4E0B-\u6CA1\u6709\u5219\u65B0\u5EFA\u4E00\u4E2A-\u53BB\u914D\u7F6E\u591A\u4E2A-github-\u8D26\u53F7\u7684\u63A8\u9001\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A-config-\u6587\u4EF6\u5230-ssh-\u6587\u4EF6\u5939\u4E0B-\u6CA1\u6709\u5219\u65B0\u5EFA\u4E00\u4E2A-\u53BB\u914D\u7F6E\u591A\u4E2A-github-\u8D26\u53F7\u7684\u63A8\u9001\u64CD\u4F5C" aria-hidden="true">#</a> \u9700\u8981\u6DFB\u52A0\u4E00\u4E2A config \u6587\u4EF6\u5230.ssh \u6587\u4EF6\u5939\u4E0B\uFF08\u6CA1\u6709\u5219\u65B0\u5EFA\u4E00\u4E2A\uFF09\uFF0C\u53BB\u914D\u7F6E\u591A\u4E2A github \u8D26\u53F7\u7684\u63A8\u9001\u64CD\u4F5C</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> default</span>

  <span class="token title important"><span class="token punctuation">#</span> \u7528\u4E8E\u533A\u5206\u4E0D\u540C github \u8D26\u53F7\u7684</span>
  Host github.com
  <span class="token title important"><span class="token punctuation">#</span> github \u5730\u5740\u6216\u5176\u4ED6\u4ED3\u5E93\u5730\u5740</span>
  Hostname github.com
  <span class="token title important"><span class="token punctuation">#</span> \u672C\u5730\u5BC6\u94A5\u5730\u5740</span>
  IdentityFile ~/.ssh/id_rsa
  <span class="token title important"><span class="token punctuation">#</span> \u81EA\u5B9A\u4E49\u7528\u6237\u540D</span>
  User default

<span class="token title important"><span class="token punctuation">#</span> \u53E6\u5916\u7684\u6587\u4EF6\u540D</span>

  Host \u53E6\u5916\u7684\u6587\u4EF6\u540D.github.com
  Hostname github.com
  IdentityFile ~/.ssh/\u53E6\u5916\u7684\u6587\u4EF6\u540D
  User \u53E6\u5916\u7684\u6587\u4EF6\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u8FDE\u63A5" aria-hidden="true">#</a> \u6D4B\u8BD5\u8FDE\u63A5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> -T git@github.com
<span class="token comment"># \u8FDE\u63A5\u6210\u529F\u4F1A\u63D0\u793A\uFF1AHi\uFF0Cdefault\uFF01...</span>

<span class="token function">ssh</span> -T git@\u53E6\u5916\u7684\u6587\u4EF6\u540D.github.com
<span class="token comment"># \u8FDE\u63A5\u6210\u529F\u4F1A\u63D0\u793A\uFF1AHi\uFF0C\u53E6\u5916\u7684\u6587\u4EF6\u540D\uFF01...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clone" tabindex="-1"><a class="header-anchor" href="#clone" aria-hidden="true">#</a> clone</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># default</span>
<span class="token function">git</span> clone git@github.com:xxx/xxx.git
<span class="token comment"># \u53E6\u5916\u7684\u6587\u4EF6\u540D</span>
<span class="token function">git</span> clone git@\u53E6\u5916\u7684\u6587\u4EF6\u540D.github.com:xxx/xxx.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h3><blockquote><p>git \u64CD\u4F5C\u4E4B\u524D\uFF0C\u9700\u8981\u914D\u7F6Egit\u7528\u6237\u4FE1\u606F\uFF0C\u5426\u5219\u5C06\u4F7F\u7528\u5168\u5C40\u7528\u6237\u4FE1\u606F\u63D0\u4EA4\uFF01\uFF01\uFF01</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config user.name <span class="token string">&#39;\u6635\u79F0&#39;</span>
<span class="token function">git</span> config user.email <span class="token string">&#39;\u90AE\u7BB1&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function H(q,w){const e=o("router-link");return l(),d("div",null,[r,h,s("nav",v,[s("ul",null,[s("li",null,[a(e,{to:"#\u67E5\u770B-git-\u5DF2\u914D\u7F6E\u5217\u8868"},{default:i(()=>[p]),_:1})]),s("li",null,[a(e,{to:"#\u82E5\u5DF2\u5B58\u5728\u5168\u5C40\u7684-git-\u914D\u7F6E"},{default:i(()=>[m]),_:1})]),s("li",null,[a(e,{to:"#\u5C06\u521A\u624D\u65B0\u589E\u7684\u4E24\u4E2A\u6216\u591A\u4E2A-ssh-key-\u653E\u5165-ssh-agent-\u4FE1\u4EFB\u5217\u8868\u4E2D"},{default:i(()=>[b]),_:1})]),s("li",null,[a(e,{to:"#\u590D\u5236\u4E24\u4E2A\u6216\u591A\u4E2A\u516C\u94A5-pub-\u6587\u4EF6-\u5206\u522B\u6DFB\u52A0\u5230\u4E0D\u540C\u7684-git-\u8D26\u53F7\u4E0B"},{default:i(()=>[g]),_:1})]),s("li",null,[a(e,{to:"#\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A-config-\u6587\u4EF6\u5230-ssh-\u6587\u4EF6\u5939\u4E0B-\u6CA1\u6709\u5219\u65B0\u5EFA\u4E00\u4E2A-\u53BB\u914D\u7F6E\u591A\u4E2A-github-\u8D26\u53F7\u7684\u63A8\u9001\u64CD\u4F5C"},{default:i(()=>[k]),_:1})]),s("li",null,[a(e,{to:"#\u6D4B\u8BD5\u8FDE\u63A5"},{default:i(()=>[_]),_:1})]),s("li",null,[a(e,{to:"#clone"},{default:i(()=>[f]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#\u6CE8\u610F"},{default:i(()=>[x]),_:1})])])])])]),y])}var N=t(u,[["render",H],["__file","more-account.html.vue"]]);export{N as default};
