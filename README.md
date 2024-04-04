# Holloway's Angular Static Website Builder

[![Holloway Angular](src/icons/banner_1200x340.svg)](#)

This is a template repository for using
[Angular JavaScript Framework](https://angular.io/) to quickly build a static
website with modern requirements. It is part of and governed by
[AutomataCI](https://github.com/chewkeanho/AutomataCI/).




## Why It Matters

For some good reasons:

1. **Pre-configured Settings** - To pre-configure the Angular into generating
   static website rather than web application.
2. **Avoid 3rd-party Dependency** - Angular Universal is sufficent to get the
   job done - Scully is no longer required.
3. **Seamless Expression** - It's much easier to use static website to
   facilitate business operations compared to hosting a web app.
4. **Seamless GitHub Pages Integrations** - Work straight out of the box.




## To Publish

Open a terminal, run the following in sequence and if any of them is reporting
error:
**stop and [REPORT IT HERE](https://github.com/ChewKeanHo/APP_Website_Angular/issues)**:

```
$ ./automataCI/ci.sh.ps1 env
$ ./automataCI/ci.sh.ps1 setup
$ ./automataCI/ci.sh.ps1 prepare
$ ./automataCI/ci.sh.ps1 test
$ ./automataCI/ci.sh.ps1 build
$ ./automataCI/ci.sh.ps1 package
$ ./automataCI/ci.sh.ps1 release
$ ./automataCI/ci.sh.ps1 deploy
```




## License

> **IMPORTANT NOTE**
>
> This repository is licensed under MIT License. However, since this is a
> template repository and the website are usually privatized in general, the
> configured license frameworks defaults to proprietary license. Please update
> it accordingly.

This repository is licensed under the Proprietary License 1.0 license. Please
refer to the [LICENSE file](LICENSE.txt).
