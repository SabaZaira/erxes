(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{160:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"rightToc",(function(){return l})),o.d(t,"default",(function(){return c}));var a=o(2),n=o(6),r=(o(0),o(177)),i={slug:"myth-of-a-single-creator-of-an-open-source-project",title:"Debunking the Myth of a Single Creator with Justin Cappos",author:"Indra Ganzorig",author_title:"Senior Product Marketing Manager at Erxes Inc",author_image_url:"https://erxes.io/static/images/team/square/indra.png",tags:["open source","web development"]},s={permalink:"/interviews/myth-of-a-single-creator-of-an-open-source-project",source:"@site/interviews/myth-of-a-single-creator-of-an-open-source-project.md",description:"Today, erxes had the opportunity to chat with Justin Cappos, professor in the Computer Science and Engineering department at New York University. We talked about his involvement in various open source projects, including TUF, a project aimed at helping developers maintain the security of their software update systems.",date:"2021-01-13T09:14:07.969Z",tags:[{label:"open source",permalink:"/interviews/tags/open-source"},{label:"web development",permalink:"/interviews/tags/web-development"}],title:"Debunking the Myth of a Single Creator with Justin Cappos",readingTime:17.255,truncated:!0,prevItem:{title:"Increasing Growth by Building a Community with Norbert Sendetzky",permalink:"/interviews/increasing-growth-by-building-community"},nextItem:{title:"All Things Open Source and Preparing for a Project Launch with Sandoche Adittane",permalink:"/interviews/project-launch-with-sandoche-adittane"}},l=[{value:"The Interview",id:"the-interview",children:[]}],h={rightToc:l};function c(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},h,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Today, erxes had the opportunity to chat with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://engineering.nyu.edu/faculty/justin-cappos"}),"Justin Cappos"),", professor in the Computer Science and Engineering department at New York University. We talked about his involvement in various open source projects, including ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/theupdateframework/tuf"}),"TUF"),", a project aimed at helping developers maintain the security of their software update systems."),Object(r.b)("p",null,"We have an exciting interview planned for you today, so let\u2019s jump in!"),Object(r.b)("h3",{id:"the-interview"},"The Interview"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://erxes.io/blog_wp/wp-content/uploads/2020/03/tuf-2.png",alt:"Alt text"}))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Hello and thank you for taking the time to chat with our blog readers about the story behind TUF. Is TUF your first open source project? If not, how did you get started in the open source space?")),Object(r.b)("p",null,"Today, erxes had the opportunity to chat with Justin Cappos, professor in the Computer Science and Engineering department at New York University. We talked about his involvement in various open source projects, including TUF, a project aimed at helping developers maintain the security of their software update systems."),Object(r.b)("p",null,"We have an exciting interview planned for you today, so let\u2019s jump in!"),Object(r.b)("p",null,"The Interview\nHello and thank you for taking the time to chat with our blog readers about the story behind TUF. Is TUF your first open source project? If not, how did you get started in the open source space?"),Object(r.b)("p",null,"I have worked on quite a few open source projects before TUF. My two biggest ones prior to TUF were Stork and the Seattle Testbed. Stork is a package manager that was designed to work well in environments with lots of OSVMs running on shared hardware similar to a normal server / desktop. I started the project back in 2002, when this environment was much more rare. \u201cThe cloud\u201d wasn\u2019t a buzzword I heard until much later, but Stork was really the first package manager expressly designed to work in the cloud."),Object(r.b)("p",null,"I started the Seattle testbed project in 2008 as a \u201cfog computing\u201d platform, which is like cloud environment, but running on edge devices like laptops, smartphones, wireless routers, etc. At its peak, we had about 35K systems you could run software on. One cool thing is that we basically abstracted away all of the platform differences so you didn\u2019t even know if you were on a Macbook, a one-laptop-per-child with a hand crank, a Nokia N800 phone, a beefy Linux server, a Windows Mobile phone, etc. \u2014 your code just worked and masked the OS differences from you. More than 100 different developers (most of them students) contributed to the code. While we still use the code ourselves internally for projects and educational purposes, we officially retired the project a few years ago. The NSF (National Science Foundation) had kindly helped to support it for many years, but in the end we struggled to find enough funding to maintain it. I had a student who worked on that project contact me and say that they had looked 8+ years later to see how others had solved some of the OS portability problems we worked on in that project and that what we had done was still state-of-the-art and unique. I\u2019m really proud that what we did is still useful and viable even now."),Object(r.b)("p",null,"Both Seattle and Stork were primarily used by academic researchers, rather than other open source folks. This had a different community dynamic, which had a lot of pros and cons in terms of your typical open source project today. A lot of students worked on my lab\u2019s projects, some of whom are absolutely excellent. However, many who are still learning also become solid contributors after a little while getting up to speed. So the challenges involved were often in making the projects places where almost anyone could contribute, but it was really hard to mess anything up."),Object(r.b)("p",null,"I definitely learned a bit from each project I worked on in this regard. With Stork (2002-2009), this was really my first project where I realized the value and difficulties in including a lot of outside help. I had about 20 different undergraduate researchers working on the project with me at one time or another. I wrote a first working draft of almost all of the original code (with tests and comments) and then had students help to flesh out corner cases, add features, etc. However, I was not rigorous about what form the contributions were in and very quickly there became dark corners of the code where we were hesitant to change for fear of breaking something. After a lot of frustrating time debugging unclear code from students long gone, I realized the problems with that approach."),Object(r.b)("p",null,"So, in the Seattle testbed (2008-2018), we required contributions to follow a fairly strict set of code style guidelines and testing guidelines. Documentation was in many ways more important than code. This seemed to work well in general because the code was clean enough that people diving in would be sympathetic that we weren\u2019t going to take a patch that \u201cworked\u201d, if it didn\u2019t fit clearly in a maintainable way in our code. At that time we were also running a custom, primitive CI/CD system we hand rolled to test and deploy changes quickly. This helped us find bugs much faster than we otherwise would have and was a real life saver."),Object(r.b)("p",null,"We continued to build on and refine our way of working as we created TUF and newer projects today, like Uptane and in-toto. We\u2019re taking advantage of other tools much more, such as travis for CI / CD instead of rolling our own, but the philosophy is the same: make important projects that solve a real world problem and try to make them accessible for contribution."),Object(r.b)("p",null,"As for why do I like open source, I want to make a difference in the world. I would much rather help people than make money. The university pays me a salary, after all. So, I\u2019m very happy to do things that I think will help people but be hard to commercialize. (Industry tends to grab problems where there is money to be made.) In general, I think there are a lot of important things in that space that we can help with."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"You have a very specific open source project that tackles a very specific problem. You help developers maintain the security of their software update systems. What was it about this problem that made you want to create a solution? I\u2019m assuming you had some experience yourself with problematic software update systems?")),Object(r.b)("p",null,"Stork really opened my eyes to the security problems in the area of package management. I had worked on Stork and there were a lot of issues we had to solve with MITM attackers from mirrors, etc. When I was fairly far along with Stork project, I took a step back and said, I really should look at what other package managers are doing about security. When I did this, I was quite shocked that there were concerning problems. We found we could cause outdated, vulnerable software to be installed on basically any Linux distro and that the ones we asked all accepted request from an unknown party to run an official mirror. ( Justin Cappos, Justin Samuel Scott Baker, John H. Hartman. A Look In the Mirror: Attacks on Package Managers. Department of Computer Science, University of Arizona, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://ssl.engineering.nyu.edu/papers/cappos_mirror_ccs_08.pdf"}),"https://ssl.engineering.nyu.edu/papers/cappos_mirror_ccs_08.pdf")," )"),Object(r.b)("p",null,"What was even more interesting is that after our work got a lot of press, we had some the Tor folks reach out to us. They dropped by and spent a few days in Seattle working with us on a security for a new package manager. A few months later, they sent us a design to review and we felt there were some areas we really wanted to tweak. The realization I had was that just writing a paper and pointing out some of the problems, as we did in Stork, wasn\u2019t actually going to help most people. So, this was really how TUF was born."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Your project was born back in 2009. What were some of the biggest early obstacles you faced and how did you overcome them?"),"."),Object(r.b)("p",null,"One issue is that we were somewhat under the umbrella of a large and expensive effort from the NSF which, well, had a lot of problems. So, they kept wanting us to integrate TUF into things that as far as we could tell were vaporware (or at least certainly were not ready for code). We were much more interested in working with communities like Python, Debian, etc. So we were sort of being pulled in different directions. It was a bit of a crazy time."),Object(r.b)("p",null,"I also had the Seattle Testbed have a major adoption upswing while TUF was just sort of slowly chugging along. That meant that I was splitting my time and energy between the two. For a while Seattle looked like it might be transformative, before we came to the realization that using end user provided resources seemed to be too flaky / poor to really make up for the latency gain. That was compounded by the fact the Seattle Testbed\u2019s programming model was a little different, in part to deal with the OS differences. I am not sure to what extent those lessons still hold today, but this wasn\u2019t obvious 2ish years into that project when we were roughly doubling in size every year. So Seattle Testbed was definitely what folks in academia knew me for at the time and had a lot of community-building time demands. I\u2019m afraid that me splitting my time was also an early obstacle."),Object(r.b)("p",null,"The final big issue was getting someone to really take us seriously. One thing we struggle a little with even today is that someone views the things we do as just something academic. Now that we have a few projects that have large scale adoption, this is less of a problem. Back then, the security model in Stork had been adopted by YUM, YaST, apt, Pacman, etc. but people in the broader open source community really hadn\u2019t heard of Stork and the Seattle testbed. So, there really wasn\u2019t anything with name recognition that could give credibility. TUF\u2019s adoption has been a major step forward in getting people to look at things like Uptane and in-toto as serious efforts."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Fast forward to today and TUF is being used in production by companies like Cloudflare, Docker, DigitalOcean, IBM, Microsoft and many others. Tell us a little bit more about how these companies find out about your project and what steps need to be taken to get big enterprise clients to adopt TUF as a software solution?")),Object(r.b)("p",null,"I give a ton of credit to the folks at Docker for this. We had worked a bit to standardize TUF for the Python community. Many different folks took notice of this, including Docker\u2019s security team. They wanted a design with better security and saw TUF as a step up. They built an implementation called Notary which in the cloud space is still the most widely used today. As part of Notary\u2019s deployment, Docker\u2019s team also saw a bunch of usability challenges and they made a few decisions to deploy things in certain ways. Their adoption really helped to make visible some usability challenges and forced us to formalize some less precise parts of TUF. No longer was it just our implementation we had to worry about, but we had Notary also to be concerned with. We and other folks that have deployed TUF learned a lot from that process. Right now, we\u2019re working with a broad community on Notary version 2 as we speak."),Object(r.b)("p",null,"TUF\u2019s reference implementation specifically has also been greatly improved by adoption and widescale production use by DataDog. This is led by a former PhD student who worked on TUF, Trishank Kuppusamy. He has been really critical in many ways for making the TUF project what it is today."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Speaking more generally now, what does the onboarding process look like for most open source projects? How is this different (better / worse) than the onboarding process for closed source projects? Any improvements you\u2019d like to see with this process for open source projects?")),Object(r.b)("p",null,"I don\u2019t really do closed source projects much, but in the cases I have, it\u2019s been more like you get the person a paycheck, etc. and show them to the \u201cowner\u201d of this part of the code. I\u2019ve seen orgs using closed source be much more willing to let someone \u201cown\u201d routines and have it largely up to their thoughts about what to accept and how. So, a lot of institutional knowledge ends up in heads instead of written down. If that person is a bit hard to work with, the calculus for management often revolves around how critical that piece of software is."),Object(r.b)("p",null,"My open source projects explicitly don\u2019t have \u201cownership\u201d of the code. We want anyone to be able to contribute to any part of the code. We also want code reviews / discussion to be done across the project or even different projects in the lab with the same code guidelines. Documentation is also much more key because you have to assume that every contribution could be someone\u2019s last. Also, I really try to build cohesion in the team. So, I really don\u2019t want prima donnas on the team. Our goal is to do good work and so inclusivity is really important."),Object(r.b)("p",null,"I don\u2019t know if this is fundamental to open vs closed, but these are differences I\u2019ve seen happen in a fairly stark way."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Now let\u2019s talk a little bit about growth. What have been your most effective growth channels to date? If you had to double down on one organic growth channel which would it be and why?")),Object(r.b)("p",null,"Really the community spread by our users talking about the platform has been key for TUF. In many cases we haven\u2019t even known that adoption is happening until after it has happened. Once again, I give our community members really all the credit here. While myself or another core member does give a TUF talk about once a month, I love nothing more than listening to someone else talk about TUF. I don\u2019t have a child, but I imagine it\u2019s a similar feeling where I just feel pride to have someone saying nice things about something you\u2019ve poured such a major part of your life into. They\u2019re also much better sales people that we are in many cases."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Can you talk a little bit more about what you believe to be the most challenging parts of open source project governance? How important is it to establish governance rules early on and what are some big lessons you\u2019ve learnt about open source governance that you wish you knew earlier?")),Object(r.b)("p",null,"Fortunately, most of the projects I\u2019ve worked on have had a fair amount of stability in the core members. I\u2019ve really tried to have a culture where we\u2019re supportive with contributors and really try to build consensus instead of factions. There have been potential contributors that have been very active, but also hard to deal with. In my feeling, you need to know how to manage those relationships, just like you would manage a tricky piece of code. So in many projects, a contributor with good people skills is often even more valuable than one with good technical skills."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"We touched on this earlier, but let\u2019s dive deeper. Tell us a little bit more about the relationship between TUF and New York University. Does University support mean that you don\u2019t need to think about project monetization at all?")),Object(r.b)("p",null,"Well, it helps to support some of my time and effort. I raise grant money, usually from government sources like the National Science Foundation, DARPA, and DHS (the Department of Homeland Security), to support students and developers that work with me on these projects. The government agencies are usually happy to just have us have positive impact, so commercialization, while is a positive, certainly isn\u2019t required. I\u2019ve not had someone from a funding agency say \u201cWell, you\u2019re protecting all of these people, but you really should make money on the side too\u201d. It\u2019s more that they are surprised this isn\u2019t a secondary goal of ours."),Object(r.b)("p",null,"In my view, eschewing commercialization gives us a major adoption advantage. If I go talk to a company and say \u201cyou really need a compromise-resilient software updater, like TUF\u201d, the adoption story is much stronger if it ends with \u201cand we\u2019ll give it to you for free\u201d versus \u201cand we\u2019ll sell it to you for a good price\u201d. I just want to make the world a better place. It\u2019s harder to argue against what we\u2019re providing, especially when we already have a bunch of other adoption."),Object(r.b)("p",null,"The only downside with a lack of monetization is that I spend a fair amount of time writing grants to support the work that we do. I actually don\u2019t mind this so much, because this forces you to clearly write out 3-4 year plans for a project. This can be a really helpful exercise in its own right. I\u2019ve certainly had new ideas come to light during this process."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Even if your project isn\u2019t monetized, what are some open source project monetization models that you think work best (or that you\u2019re most inspired by)? Why?")),Object(r.b)("p",null,"Honestly, I like the \u201copen specification / paid implementation\u201d model that we\u2019ve used in TUF, Uptane, and in-toto. This is where there is a clear and open specification for how something should work and a reference implementation that is production quality and free to use. Companies build their own closed source implementation if they want and sell support, etc. as well. I think this helps to let people review the key security concepts via an open specification, while letting companies easily commercialize the service aspects. It\u2019s sort of the best of both worlds."),Object(r.b)("p",null,"The problem here is how do you support the core specification / system? I\u2019m very active in the Linux Foundation, which has a model of getting corporate sponsorship for different events, board seats, etc. This has been very successful. I\u2019ve made a conscious decision to avoid this to try to avoid even the perception of the potential for bias. So apart from something like buying a coffee when we chat, etc. we haven\u2019t had a company like Docker fund our work. Of course, the actual work they do with their implementations is worth so much more in terms of adoption and press, that we\u2019re certainly not complaining."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"If you had to double down on just one channel, which would it be and why?")),Object(r.b)("p",null,"For GeekyAnts as an agency, I would double down on \u201cEngineering as Marketing\u201d because our services are very technical and that adds a lot of value to the community members and also builds brand and trust for all the demographics."),Object(r.b)("p",null,"For a product like BuilderX, it would be \u201cDirect Sales\u201d as we are very clear about our end-users and who we want to reach out to."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Lastly, if you could go back in time and change three things about how you\u2019ve gone about growing and developing TUF, what would those three things be? Why?")),Object(r.b)("p",null,"This is tough. I\u2019d be a bit afraid to do so because we\u2019ve ended up in a very good place and I\u2019d be afraid to \u2018re-roll the dice\u2019, even with better odds. I will say that one thing I still think we could do a more consistent job of is to credit all of the folks that put a lot of their heart and soul into the project overall. I feel like part of the mythos in tech is that there is a \u2018creator\u2019 who sits and makes something while there are just a lot of other people hanging around like extras in a movie. That\u2019s certainly not the case for my projects. I had a lot of the core ideas behind TUF, but did almost none of the implementation and really shepherded the specification clarity more than the reference implementation. The specification itself has had a more formal change process added, with a ton of outside people with different use cases adding new ideas into the mix. So, I\u2019d like to just take the opportunity to say that the success is really due to a talented and dynamic team of people that have come together to help make TUF happen."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Thank you greatly for taking the time to chat with ",Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"https://erxes.io/"}),"erxes")," today Justin. We really appreciate it. We really appreciate it. ",Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"https://erxes.io/blog/"}),"Our blog")," readers will undoubtedly have many actionable takeaways from today\u2019s interview .")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"To our blog readers, if you\u2019d like to learn more about Justin and the work he does with TUF, you can head over to the ",Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"https://github.com/theupdateframework/tuf"}),"TUF Github page here")," or you can head over to Justin\u2019s University profile ",Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"https://engineering.nyu.edu/faculty/justin-cappos"}),"here"),".")))}c.isMDXComponent=!0},177:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return m}));var a=o(0),n=o.n(a);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var h=n.a.createContext({}),c=function(e){var t=n.a.useContext(h),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=c(e.components);return n.a.createElement(h.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=c(o),p=a,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||r;return o?n.a.createElement(m,s(s({ref:t},h),{},{components:o})):n.a.createElement(m,s({ref:t},h))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var h=2;h<r;h++)i[h]=o[h];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"}}]);