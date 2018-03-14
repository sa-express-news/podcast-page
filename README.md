# Express-News Podcast Page # 

This repository hosts the HTML code for [the podcast listing page on the Express-News website.](https://expressnews.com/podcasts) It's some plain HTML + CSS that lives in a freeform in the WCM.

## Updating the Page ##

We'll walk through two common scenarios that require updating the podcast page: adding a new podcast and adding links to podcasting services for a podcast already listed.

In either case, you'll want to start by cloning this repository to your machine and entering the directory.

```bash
git clone https://github.com/sa-express-news/podcast-page.git
cd podcast-page
```
To add a new podcast, open `index.html` and copy one of the `<div>`s with the `podcast` class.

```html
    <div class="podcast">
        <div class="image-container">
            <img src="https://s.hdnux.com/photos/71/01/11/14946933/4/800x800.jpg" alt="Express Briefing">
        </div>
        <div class="info-container">
            <div class="info">
                <h3>Express Briefing</h3>
                    <p>The daily briefing from the San Antonio Express-News.</p>
            </div>
            <div class="links">
                <p>Listen on:</p>
                <p>
                    <a href="https://itunes.apple.com/us/podcast/express-briefing/id1296731191?mt=2">Apple Podcasts</a>
                </p>
                        <!-- ...etc -->
            </div>
        </div>
    </div>
```

Simply change the information in the copied `div` to match what you have for the new podcast. Note that we host podcast art in the WCM.

Adding links is easy, too. Let's say I want to add a link to Stitchr for a podcast. Look for the `<div>` with the class of `links` inside any given podcast.

```html
    <div class="links">
        <p>Listen on:</p>
        <p>
            <a href="https://itunes.apple.com/us/podcast/tastecast/id1353666847">Apple Podcasts</a>
        </p>
        <p>
        <a href="https://tastecast.libsyn.com/rss">RSS</a>
        </p>
        <p>
        <a href="http://tastecast.expressnews.libsynpro.com/">All Episodes</a>
        </p>
    </div>
```
Simply copy and paste a new `<p>` tag with a nested `<a>` tag inside it and change the `href` and text.

## Deploying Changes ##

Open up the `index.html` file in a browser and make sure everything looks right. The styling will look slightly different as it's not in the WCM yet, but the basic structure/content should look correct.

Once you're satisfied, commit your changes and push them back to GitHub. It's crucial that you do this so anyone else editing the page has your edits.

```bash
git add .
git commit -m "Description of what you did"
git push origin master
```

Next, open up the WCM and look for the SA Premium freeform with id `86558`.

`site:premiummysa AND id:86558`

Simply replace the contents of that freeform with the contents of the `index.html` file you just updated. Publish the freeform and view the preview version of `https://expressnews.com/podcasts`. If everything looks good, you're done!

## FAQ ##

**Characters like apostrophes look weird!**

Chances are you need to use the proper HTML character entities for things like apostrophes and emdashes. [You can use this list for reference](https://brajeshwar.github.io/entities/) - it should look like this when you're done:

```html
<p>Join Express-News food writers Chuck Blount and Mike Sutter monthly as they traverse the city looking for the area&apos;s best barbeque. If you liked 365 Days of Tacos, you&apos;ll love what we&apos;re grilling up with 52 Weeks of BBQ.</p>
```