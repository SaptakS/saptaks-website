from staticjinja import Site
import subprocess


if __name__ == "__main__":
    src_path = "src/assets/sass/"
    dest_path = "src/assets/css/"
    print ("Starting SASS.")

    try:
        process = subprocess.Popen(' '.join([
            'sass',
            '--watch',
            '%s:%s' % (src_path, dest_path)
        ]), shell=True)
    except OSError as e:
        print ("SASS failure: %s" % e)

    print ("Compiling templates...")
    site = Site.make_site(
        searchpath="src",
        outpath="dist",
        staticpaths=["assets/css/", "assets/images/", "assets/fonts/"]
    )
    # enable automatic reloading
    site.render(use_reloader=True)
