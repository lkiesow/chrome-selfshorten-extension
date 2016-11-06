SelfShorten
===========

Passing around very long URLs is often annoying since they end up being wrapped
by some tool or another and need to be reconstructed manually. One solution for
that is to use services like bitly or tinyurl which will generate a shortened
version of the URL by redirecting you from their site. This, however, makes you
rely on their service while you also pass a lot of information to them.

The thing is that often, it is not even necessary to use these external
services. A lot of web services we use can do shortening on their own. Their
default URLs just carry a lot of unnecessary information.

Take for example Amazon. The usual link to a product will look like this:

    https://www.amazon.de/AKG-K712-PRO-%C2%B7-Kopfh%C3%B6rer/dp/B00DCXWXEI/ref=s9_simh_gw_g267_i2_r?pf_rd_m=A3JWKAKR8XB7XF&pf_rd_s=&pf_rd_r=KCHEN0E0ZVHY76KGGT1B&pf_rd_t=36701&pf_rd_p=54b8e36f-2f4c-4150-93e4-255dc9c8cf85&pf_rd_i=desktop

But the only thing Amazon needs to identify the product is `B00DCXWXEI` which is
the product number. From this you can then construct a short URL which will also
take you to the product and is way more convenient to pass around:

    http://amazon.de/dp/B00DCXWXEI

This Chrome extension will help you to generate these shortened links.


Supported Sites
---------------

- Amazon
- Ebay
- Reichelt Elektronik
- Pollin Elektronik
- DealExtreme
