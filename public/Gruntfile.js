module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            cssFontDisplayBlock: {
                expand: true,
                cwd: 'build/',
                src: [
                    '*.css',
                    '!*.font-display-block.css'
                ],
                dest: 'build/',
                options: {
                    process (content) {
                        return content.replace(/font-display:optional;/g, 'font-display:block;');
                    }
                },
                rename (dest, src) {
                    return dest + src.replace('.css', '.font-display-block.css');
                }
            }
        },
        cacheBust: {
            base: {
                options: {
                    length: 16,
                    algorithm: 'md5',
                    baseDir: './build/',
                    assets: ['*', '!**/*.*.*', '!manifest.json'],
                    deleteOriginals: true,
                    jsonOutput: true,
                    jsonOutputFilename: 'manifest.json',
                    outputDir: '',
                    clearOutputDir: true
                },
                src: [
                    'build/main.css',
                    'build/main.js'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-cache-bust');

    grunt.registerTask('pre-production', ['copy', 'cacheBust']);
};