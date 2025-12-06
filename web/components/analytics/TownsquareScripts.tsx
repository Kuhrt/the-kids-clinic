/* eslint-disable @next/next/no-before-interactive-script-outside-document */
'use client';

import Script from 'next/script';

export default function TownswquareScripts() {
  return (
    <Script
      id="analytics-townsquare-script"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
              window.liveSiteAsyncInit = function() {
                LiveSite.init({
                  id : 'WI-IP9103EPNDDQ4R7ZUIBR'
                });
              };
              (function(d, s, id){
                var js, fjs = d.getElementsByTagName(s)[0],
                    p = 'https://',
                    r = Math.floor(new Date().getTime() / 1000000);
                if (d.getElementById(id)) {return;}
                js = d.createElement(s); js.id = id;
                js.src = p + "d2ra6nuwn69ktl.cloudfront.net/assets/livesite.js?" + r;
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'livesite-jssdk'));
            `
      }}
    />
  );
}
