// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXXXXX-X', 'auto'); // Replace with actual GA tracking ID
ga('send', 'pageview');

// Facebook Pixel
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'XXXXXXXXXXXXXXX'); // Replace with actual Pixel ID
fbq('track', 'PageView');

// Track form submissions
document.getElementById('leadForm').addEventListener('submit', function() {
    // Track form submission in Google Analytics
    ga('send', 'event', 'Form', 'submit', 'Lead Form');
    
    // Track form submission in Facebook Pixel
    fbq('track', 'Lead');
});

// Track scroll depth
let scrollDepthTracked = {
    25: false,
    50: false,
    75: false,
    100: false
};

window.addEventListener('scroll', function() {
    const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
    
    Object.keys(scrollDepthTracked).forEach(depth => {
        if (scrollPercent >= depth && !scrollDepthTracked[depth]) {
            scrollDepthTracked[depth] = true;
            ga('send', 'event', 'Scroll Depth', 'Reached ' + depth + '%', window.location.pathname);
        }
    });
});
