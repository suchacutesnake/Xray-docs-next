import{r as n,o as s,c as l,a as e,b as a,w as o,F as t,e as c}from"./app.762e1d31.js";const u={},p=e("h1",{id:"内置-dns-服务器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#内置-dns-服务器","aria-hidden":"true"},"#"),c(" 内置 DNS 服务器")],-1),r=e("h2",{id:"dns-服务器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dns-服务器","aria-hidden":"true"},"#"),c(" DNS 服务器")],-1),i=e("p",null,"Xray 内置的 DNS 模块，主要有两大用途：",-1),d=e("ul",null,[e("li",null,[e("p",null,[c("在路由阶段, 解析域名为 IP, 并且根据域名解析得到的 IP 进行规则匹配以分流. 是否解析域名及分流和路由配置模块中 "),e("code",null,"domainStrategy"),c(" 的值有关, 只有在设置以下两种值时,才会使用内置 DNS 服务器进行 DNS 查询:")]),e("ul",null,[e("li",null,'"IPIfNonMatch", 请求一个域名时，进行路由里面的 domain 进行匹配，若无法匹配到结果，则对这个域名使用内置 DNS 服务器进行 DNS 查询，并且使用查询返回的 IP 地址再重新进行 IP 路由匹配。'),e("li",null,'"IPOnDemand", 当匹配时碰到任何基于 IP 的规则，将域名立即解析为 IP 进行匹配。')])]),e("li",null,[e("p",null,"解析目标地址进行连接。"),e("ul",null,[e("li",null,[c("如 在 "),e("code",null,"freedom"),c(" 出站中，将 "),e("code",null,"domainStrategy"),c(" 设置为 "),e("code",null,"UseIP"),c(", 由此出站发出的请求, 会先将域名通过内置服务器解析成 IP, 然后进行连接。")]),e("li",null,[c("如 在 "),e("code",null,"sockopt"),c(" 中，将 "),e("code",null,"domainStrategy"),c(" 设置为 "),e("code",null,"UseIP"),c(", 此出站发起的系统连接，将先由内置服务器解析为 IP, 然后进行连接。")])])])],-1),b=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP 1"),e("p",null,"内置 DNS 服务器所发出的 DNS 查询请求，会自动根据路由配置进行转发。")],-1),k=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP 2"),e("p",null,"只支持最基本的 IP 查询（A 和 AAAA 记录）。其他查询不会进入内置 DNS 服务器。")],-1),m=e("h2",{id:"dns-处理流程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dns-处理流程","aria-hidden":"true"},"#"),c(" DNS 处理流程")],-1),g=e("p",null,"DNS 服务器配置模块可以配置多个 DNS 服务器, 并且指定优先匹配列表.",-1),h=e("ol",null,[e("li",null,"查询的域名与某个 DNS 服务器指定的域名列表匹配时，Xray 会优先使用这个 DNS 服务器进行查询。"),e("li",null,"无匹配时, 按从上往下的顺序进行查询，并且会跳过 1 步骤中使用的最后一个服务器。"),e("li",null,"只返回匹配 expectIPs 的 IP 列表。")],-1),y=e("p",null,"DNS 服务器的处理流程示意图如下：",-1),D=e("p",null,[e("img",{src:"/Xray-docs-next/assets/dns_flow.c919fdc8.png?classes=border,shadow",alt:""})],-1),S=e("h2",{id:"dnsobject",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dnsobject","aria-hidden":"true"},"#"),c(" DnsObject")],-1),I=e("p",null,[e("code",null,"DnsObject"),c(" 对应配置文件的 "),e("code",null,"dns"),c(" 项。")],-1),P=e("div",{class:"language-json ext-json line-numbers-mode"},[e("pre",{class:"language-json"},[e("code",null,[e("span",{class:"token punctuation"},"{"),c("\n  "),e("span",{class:"token property"},'"dns"'),e("span",{class:"token operator"},":"),c(),e("span",{class:"token punctuation"},"{"),c("\n    "),e("span",{class:"token property"},'"hosts"'),e("span",{class:"token operator"},":"),c(),e("span",{class:"token punctuation"},"{"),c("\n      "),e("span",{class:"token property"},'"baidu.com"'),e("span",{class:"token operator"},":"),c(),e("span",{class:"token string"},'"127.0.0.1"'),c("\n    "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),c("\n    "),e("span",{class:"token property"},'"servers"'),e("span",{class:"token operator"},":"),c(),e("span",{class:"token punctuation"},"["),c("\n      "),e("span",{class:"token string"},'"8.8.8.8"'),e("span",{class:"token punctuation"},","),c("\n      "),e("span",{class:"token string"},'"8.8.4.4"'),e("span",{class:"token punctuation"},","),c("\n      "),e("span",{class:"token punctuation"},"{"),c("\n        "),e("span",{class:"token property"},'"address"'),e("span",{class:"token operator"},":"),c(),e("span",{class:"token string"},'"1.2.3.4"'),e("span",{class:"token punctuation"},","),c("\n        "),e("span",{class:"token property"},'"port"'),e("span",{class:"token operator"},":"),c(),e("span",{class:"token number"},"5353"),e("span",{class:"token punctuation"},","),c("\n        "),e("span",{class:"token property"},'"domains"'),e("span",{class:"token operator"},":"),c(),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},'"domain:xray.com"'),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),c("\n        "),e("span",{class:"token property"},'"expectIPs"'),e("span",{class:"token operator"},":"),c(),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},'"geoip:cn"'),e("span",{class:"token punctuation"},"]"),c("\n      "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),c("\n      "),e("span",{class:"token string"},'"localhost"'),c("\n    "),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),c("\n    "),e("span",{class:"token property"},'"clientIp"'),e("span",{class:"token operator"},":"),c(),e("span",{class:"token string"},'"1.2.3.4"'),e("span",{class:"token punctuation"},","),c("\n    "),e("span",{class:"token property"},'"tag"'),e("span",{class:"token operator"},":"),c(),e("span",{class:"token string"},'"dns_inbound"'),c("\n  "),e("span",{class:"token punctuation"},"}"),c("\n"),e("span",{class:"token punctuation"},"}"),c("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br"),e("span",{class:"line-number"},"17"),e("br"),e("span",{class:"line-number"},"18"),e("br"),e("span",{class:"line-number"},"19"),e("br"),e("span",{class:"line-number"},"20"),e("br")])],-1),N=e("blockquote",null,[e("p",null,[e("code",null,"hosts"),c(": map{string: address}")])],-1),f=e("p",null,'静态 IP 列表，其值为一系列的 "域名": "地址"。其中地址可以是 IP 或者域名。在解析域名时，如果域名匹配这个列表中的某一项:',-1),x=e("ul",null,[e("li",null,"当该项的地址为 IP 时，则解析结果为该项的 IP"),e("li",null,"当该项的地址为域名时，会使用此域名进行 IP 解析，而不使用原始域名。")],-1),v=e("p",null,"域名的格式有以下几种形式：",-1),j=e("li",null,'纯字符串：当此字符串完整匹配目标域名时，该规则生效。例如 "xray.com" 匹配 "xray.com"，但不匹配 "www.xray.com"。',-1),q=e("li",null,[c("正则表达式：由 "),e("code",null,'"regexp:"'),c(' 开始，余下部分是一个正则表达式。当此正则表达式匹配目标域名时，该规则生效。例如 "regexp:\\\\.goo.*\\\\.com$" 匹配 "www.google.com"、"fonts.googleapis.com"，但不匹配 "google.com"。')],-1),O=e("li",null,[c("子域名 (推荐)：由 "),e("code",null,'"domain:"'),c(' 开始，余下部分是一个域名。当此域名是目标域名或其子域名时，该规则生效。例如 "domain:xray.com" 匹配 "www.xray.com" 与 "xray.com"，但不匹配 "wxray.com"。')],-1),w=e("li",null,[c("子串：由 "),e("code",null,'"keyword:"'),c(' 开始，余下部分是一个字符串。当此字符串匹配目标域名中任意部分，该规则生效。比如 "keyword:sina.com" 可以匹配 "sina.com"、"sina.com.cn" 和 "www.sina.com"，但不匹配 "sina.cn"。')],-1),X=c("预定义域名列表：由 "),H=e("code",null,'"geosite:"',-1),A=c(" 开头，余下部分是一个名称，如 "),T=e("code",null,"geosite:google",-1),E=c(" 或者 "),F=e("code",null,"geosite:cn",-1),_=c("。名称及域名列表参考 "),R=c("预定义域名列表"),L=c("。"),U=e("blockquote",null,[e("p",null,[e("code",null,"servers"),c(": [string | "),e("a",{href:"#serverobject"},"ServerObject"),c(" ]")])],-1),C=e("p",null,[c("一个 DNS 服务器列表，支持的类型有两种：DNS 地址（字符串形式）和 "),e("a",{href:"#serverobject"},"ServerObject"),c(" 。")],-1),B=e("p",null,[c("当它的值是一个 DNS IP 地址时，如 "),e("code",null,'"8.8.8.8"'),c("，Xray 会使用此地址的 53 端口进行 DNS 查询。")],-1),M=e("p",null,[c("当值为 "),e("code",null,'"localhost"'),c(" 时，表示使用本机预设的 DNS 配置。")],-1),$=e("p",null,[c("当值是 "),e("code",null,'"https://host:port/dns-query"'),c(" 的形式，如 "),e("code",null,'"https://dns.google/dns-query"'),c("，Xray 会使用 "),e("code",null,"DNS over HTTPS"),c(" (RFC8484, 简称 DOH) 进行查询。有些服务商拥有 IP 别名的证书，可以直接写 IP 形式，比如 "),e("code",null,"https://1.1.1.1/dns-query"),c("。也可使用非标准端口和路径，如 "),e("code",null,'"https://a.b.c.d:8443/my-dns-query"')],-1),z=e("p",null,[c("当值是 "),e("code",null,'"https+local://host:port/dns-query"'),c(" 的形式，如 "),e("code",null,'"https+local://dns.google/dns-query"'),c("，Xray 会使用 "),e("code",null,"DOH本地模式"),c(" 进行查询，即 DOH 请求不会经过 Routing/Outbound 等组件，直接对外请求，以降低耗时。一般适合在服务端使用。也可使用非标端口和路径。")],-1),G=e("p",null,[c("当值是 "),e("code",null,"fakedns"),c(" 时，将使用 FakeDNS 功能进行查询。")],-1),J=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP 1"),e("p",null,[c("当使用 "),e("code",null,"localhost"),c(" 时，本机的 DNS 请求不受 Xray 控制，需要额外的配置才可以使 DNS 请求由 Xray 转发。")])],-1),K=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP 2"),e("p",null,[c("不同规则初始化得到的 DNS 客户端会在 Xray 启动日志中以 "),e("code",null,"info"),c(" 级别体现，比如 "),e("code",null,"local DOH"),c("、"),e("code",null,"remote DOH"),c(" 和 "),e("code",null,"udp"),c(" 等模式。")])],-1),Q={class:"custom-container tip"},V=e("p",{class:"custom-container-title"},"TIP 3",-1),W=c("(v1.4.0+) 可以在 "),Y=c("日志"),Z=c(" 中打开 DNS 查询日志。"),nn=e("blockquote",null,[e("p",null,[e("code",null,"clientIp"),c(": string")])],-1),sn=e("p",null,"用于 DNS 查询时通知服务器以指定 IP 位置。不能是私有地址。",-1),ln=e("blockquote",null,[e("p",null,[e("code",null,"tag"),c(": string")])],-1),en=e("p",null,[c("由内置 DNS 发出的查询流量，除 "),e("code",null,"localhost"),c(" 和 "),e("code",null,"DOHL_"),c(" 模式外，都可以用此标识在路由使用 "),e("code",null,"inboundTag"),c(" 进行匹配。")],-1),an=e("h3",{id:"serverobject",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#serverobject","aria-hidden":"true"},"#"),c(" ServerObject")],-1),on=e("div",{class:"language-json ext-json line-numbers-mode"},[e("pre",{class:"language-json"},[e("code",null,[e("span",{class:"token punctuation"},"{"),c("\n  "),e("span",{class:"token property"},'"address"'),e("span",{class:"token operator"},":"),c(),e("span",{class:"token string"},'"1.2.3.4"'),e("span",{class:"token punctuation"},","),c("\n  "),e("span",{class:"token property"},'"port"'),e("span",{class:"token operator"},":"),c(),e("span",{class:"token number"},"5353"),e("span",{class:"token punctuation"},","),c("\n  "),e("span",{class:"token property"},'"domains"'),e("span",{class:"token operator"},":"),c(),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},'"domain:xray.com"'),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},","),c("\n  "),e("span",{class:"token property"},'"expectIPs"'),e("span",{class:"token operator"},":"),c(),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},'"geoip:cn"'),e("span",{class:"token punctuation"},"]"),c("\n"),e("span",{class:"token punctuation"},"}"),c("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br")])],-1),tn=e("blockquote",null,[e("p",null,[e("code",null,"address"),c(": address")])],-1),cn=e("p",null,"一个 DNS 服务器列表，支持的类型有两种：DNS 地址（字符串形式）和 ServerObject 。",-1),un=e("p",null,'当它的值是一个 DNS IP 地址时，如 "8.8.8.8"，Xray 会使用此地址的 53 端口进行 DNS 查询。',-1),pn=e("p",null,'当值为 "localhost" 时，表示使用本机预设的 DNS 配置。',-1),rn=e("p",null,[c("当值是 "),e("code",null,'"https://host:port/dns-query"'),c(" 的形式，如 "),e("code",null,'"https://dns.google/dns-query"'),c("，Xray 会使用 "),e("code",null,"DNS over HTTPS"),c(" (RFC8484, 简称 DOH) 进行查询。有些服务商拥有 IP 别名的证书，可以直接写 IP 形式，比如 "),e("code",null,"https://1.1.1.1/dns-query"),c("。也可使用非标准端口和路径，如 "),e("code",null,'"https://a.b.c.d:8443/my-dns-query"')],-1),dn=e("p",null,[c("当值是 "),e("code",null,'"https+local://host:port/dns-query"'),c(" 的形式，如 "),e("code",null,'"https+local://dns.google/dns-query"'),c("，Xray 会使用 DOH 本地模式 进行查询，即 DOH 请求不会经过 Routing/Outbound 等组件，直接对外请求，以降低耗时。一般适合在服务端使用。也可使用非标端口和路径。")],-1),bn=e("p",null,[c("当值是 "),e("code",null,"fakedns"),c(" 时，将使用 FakeDNS 功能进行查询。")],-1),kn=e("blockquote",null,[e("p",null,[e("code",null,"port"),c(": number")])],-1),mn=e("p",null,[c("DNS 服务器端口，如 "),e("code",null,"53"),c("。此项缺省时默认为 "),e("code",null,"53"),c("。当使用 DOH 模式该项无效，非标端口应在 URL 中指定。")],-1),gn=e("blockquote",null,[e("p",null,[e("code",null,"domains"),c(": [string]")])],-1),hn=c("一个域名列表，此列表包含的域名，将优先使用此服务器进行查询。域名格式和 "),yn=c("路由配置"),Dn=c(" 中相同。"),Sn=e("blockquote",null,[e("p",null,[e("code",null,"expectIPs"),c(":[string]")])],-1),In=c("一个 IP 范围列表，格式和 "),Pn=c("路由配置"),Nn=c(" 中相同。"),fn=e("p",null,"当配置此项时，Xray DNS 会对返回的 IP 的进行校验，只返回包含 expectIPs 列表中的地址。",-1),xn=e("p",null,"如果未配置此项，会原样返回 IP 地址。",-1);u.render=function(c,u){const vn=n("RouterLink");return s(),l(t,null,[p,r,i,d,b,k,m,g,h,y,D,S,I,P,N,f,x,v,e("ul",null,[j,q,O,w,e("li",null,[X,H,A,T,E,F,_,a(vn,{to:"/en/config/routing.html#%E9%A2%84%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D%E5%88%97%E8%A1%A8"},{default:o((()=>[R])),_:1}),L])]),U,C,B,M,$,z,G,J,K,e("div",Q,[V,e("p",null,[W,a(vn,{to:"/en/config/log.html"},{default:o((()=>[Y])),_:1}),Z])]),nn,sn,ln,en,an,on,tn,cn,un,pn,rn,dn,bn,kn,mn,gn,e("p",null,[hn,a(vn,{to:"/en/config/routing.html#ruleobject"},{default:o((()=>[yn])),_:1}),Dn]),Sn,e("p",null,[In,a(vn,{to:"/en/config/routing.html#ruleobject"},{default:o((()=>[Pn])),_:1}),Nn]),fn,xn],64)};export default u;