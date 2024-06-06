/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.externals.push({
            "utf-8-validate": "commonjs utf-8-validate",
            bufferutill: "commonjs bufferutill"
        });

        return config;
    },
    images: {
        domains: [
            "utfs.io"
        ]
    }
}

module.export = nextConfig