function CVViewModel() {
    var self = this;

    self.name = "Matt Spaanem";
    self.title = "Web Developer / Graphic Designer";
    self.street = "1764 N. 10th St.";
    self.city = "Washougal";
    self.state = "WA";
    self.zip = "98671";
    self.email = "matt@spaanem.com";
    self.url = "spaanem.com";
    self.phone = "(414) 331-9134";
     
    self.eduStats = [
        {
            name: "Milwaukee Institute of Art & Design",
            deets: "Communication Design BFA",
            date: "Graduated 2006",
            grade: "Cumulative GPA 3.52"
        },
        {
            name: "Purdue University",
            deets: "Computer Graphics Coursework",
            date: "1997 - 1999",
            grade: ""
        }
    ];
    self.skills = [
        { name: "HTML5", link: "https://www.w3.org/TR/html5/", name2: "", link2: "" },
        { name: "CSS", link: "https://www.w3.org/TR/css-2010/", name2: "SCSS", link2: "http://sass-lang.com/" },
        { name: "Responsive Web Design", link: "https://en.wikipedia.org/wiki/Responsive_web_design", name2: "", link2: "" },
        { name: "BEM", link: "http://getbem.com/", name2: "SMACSS", link2: "https://smacss.com/" },
        { name: "Javascript", link: "http://www.ecma-international.org/publications/standards/Ecma-262.htm", name2: "jQuery", link2: "http://jquery.com/" },
        { name: "Gulp Build Scripts", link: "http://gulpjs.com/", name2: "", link2: "" },
        { name: "Git", link: "https://git-scm.com/", name2: "", link2: "" },
        { name: "Photoshop", link: "https://www.adobe.com/products/photoshop.html", name2: "", link2: "" },
        { name: "Illustrator", link: "https://www.adobe.com/products/illustrator.html", name2: "", link2: "" },
        { name: "Inkscape", link: "https://inkscape.org/", name2: "", link2: "" },
        { name: "Umbraco (CMS)", link: "https://umbraco.com/", name2: "", link2: "" },
        { name: "WordPress (CMS)", link: "https://wordpress.org/", name2: "", link2: "" },
        { name: "Razor / C#", link: "https://dotnet.microsoft.com/apps/aspnet/web-apps", name2: "", link2: "" },
        { name: "Web Accessibility", link: "https://www.w3.org/WAI/standards-guidelines/wcag/", name2: "", link2: "" },
        { name: "Visual Studio", link: "https://visualstudio.microsoft.com/vs/", name2: "VS Code", link2: "https://code.visualstudio.com/?wt.mc_id=DX_841432" },
        { name: "PHP", link: "http://php.net/", name2: "MySQL", link2: "https://www.mysql.com/" },
        { name: "Knockout.js", link: "https://knockoutjs.com/", name2: "", link2: "" },

    ];
    self.extras = [
        { name: "PDF Resume", link: "/spaanem_resume.pdf"},
        { name: "LinkedIn", link: "https://www.linkedin.com/in/spaanem" },
    ];
    self.samples = [
        {
            title: "Landstar System",
            link: "https://www.landstar.com/",
            desc: "Mobile-first responsive website built in Umbraco utilizing Razor templates and Nested Content fields. This site boasts an unconventional side navigation built in jQuery and taking advantage of CSS transitions for all animation.",
        },
        {
            title: "BlueStar Retirement",
            link: "https://www.bluestarretirementservices.com/",
            desc: "Mobile-first responsive website built in Umbraco heavily utilizing Nested Content (multidimensional arrays) fields and Razor templates. This site features a number of sections with image elements either sticking out of their containers or sticking to the browser edge while content remains inside a fixed width container, a challenge for my CSS skills, especially while being responsive."
        },
        {
            title: "Clay Theatre",
            link: "https://www.claytheatre.com/",
            desc: "Mobile-first responsive website built in Umbraco utilizing Razor templates that are highly customizable by the client."
        },
        {
            title: "Vallencourt Construction",
            link: "http://www.vallencourt.com/",
            desc: "Mobile-first responsive website built in Umbraco using BEM CSS naming/modules and Razor templates."
        },
    ];
    self.workplaces = [
        {
            place: "Station Four",
            dates: "2016 - Present",
            position: "Senior Front End Developer",
            desc: "Remote employee; Front End HTML, CSS/LESS/SCSS, Javascript/jQuery development in Visual Studio. Configure and code Razor/C# templates for CMS, typically Umbraco with some Wordpress or DotNetNuke thrown in for flavor."
        },
        {
            place: "Rocket Media",
            dates: "2011 - 2016",
            position: "Web Developer",
            desc: "Remote employee; Front End HTML, CSS/SCSS, Javascript/jQuery and Gulp workflow development. Configure and code backend templates for CMS (ExpressionEngine, Craft, WordPress) and static websites."
        },
        {
            place: "Trisept Solutions",
            dates: "2010 - 2011",
            position: "Web Designer",
            desc: "Front end HTML and CSS development for ASP.NET and SharePoint based websites."
        },
        {
            place: "ec-connection",
            dates: "2008 - 2010",
            position: "Interactive Designer",
            desc: "Website design and development in HTML, CSS, and Javascript/jQuery including development for content management systems."
        },
        {
            place: "Boelter + Lincoln",
            dates: "2006 - 2008",
            position: "Interactive Designer",
            desc: "Web banner creation in Flash/Actionscript including rich media and interactive executions. HTML and CSS development for websites."
        },
        {
            place: "Panda Communications",
            dates: "2002 - 2006",
            position: "Interactive Designer",
            desc: "Customize ecommerce templates in HTML and CSS to match client identity. Design/develop FileMaker Pro database driven websites."
        },
        {
            place: "Hoffman York",
            dates: "Summer 2005",
            position: "Intern Designer",
            desc: "Concept and design advertisements for the summer intern project. Design logo options for short-term contest identity."
        },
        {
            place: "Compuware Corporation",
            dates: "2000 - 2002",
            position: "Web/Multimedia Designer",
            desc: "Concept and build in HTML, browser-based training modules. Build multiple sections of large interactive flash marketing movie."
        },
        {
            place: "Daniel McCoy",
            dates: "2001",
            position: "Web Design - Freelance",
            desc: "Concept and design website; develop online photo album in PHP."
        },
        {
            place: "WebCombo",
            dates: "2000",
            position: "Web Designer",
            desc: "Create dynamic flash interfaces for internet portal. Design and code websites in HTML for various clients."
        },
        {
            place: "Dramm Corporation",
            dates: "Summer 1998",
            position: "Intern Designer",
            desc: "Illustrate various products and components for catalog. Design product labels and informational/sell sheets. Assist department head in product photo shoots."
        },
    ];
}

ko.applyBindings(new CVViewModel());