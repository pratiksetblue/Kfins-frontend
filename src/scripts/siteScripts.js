let siteScriptPromise;

export function loadSiteScripts() {
    if (!siteScriptPromise) {
        siteScriptPromise = new Promise((resolve) => {
            const existing = document.querySelector(
                'script[data-kfins-site-script]'
            );

            if (existing) {
                if (existing.dataset.loaded === "true") {
                    resolve();
                    return;
                }

                existing.addEventListener("load", () => resolve(), {
                    once: true
                });

                existing.addEventListener("error", () => resolve(), {
                    once: true
                });

                return;
            }

            const script = document.createElement("script");

            script.type = "module";
            script.src = "/assets/js/main-DFIDqRNq.js";
            script.dataset.kfinsSiteScript = "true";

            script.addEventListener(
                "load",
                () => {
                    script.dataset.loaded = "true";
                    resolve();
                },
                { once: true }
            );

            script.addEventListener(
                "error",
                () => resolve(),
                { once: true }
            );

            document.head.appendChild(script);
        });
    }

    return siteScriptPromise.then(() => {

        // Original website JS uses these events.
        // React dynamically loads JS after these events have fired,
        // so fire them again after React has rendered.

        window.dispatchEvent(
            new Event("DOMContentLoaded")
        );

        window.dispatchEvent(
            new Event("load")
        );
    });
}