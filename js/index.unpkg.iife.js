!(function (e) {
    "use strict";
    const t = [
      // {
      //   id: "abap",
      //   scopeName: "source.abap",
      //   path: "abap.tmLanguage.json",
      //   samplePath: "abap.sample",
      // },
      // {
      //   id: "actionscript-3",
      //   scopeName: "source.actionscript.3",
      //   path: "actionscript-3.tmLanguage.json",
      //   samplePath: "actionscript-3.sample",
      // },
      // {
      //   id: "ada",
      //   scopeName: "source.ada",
      //   path: "ada.tmLanguage.json",
      //   samplePath: "ada.sample",
      // },
      // {
      //   id: "apache",
      //   scopeName: "source.apacheconf",
      //   path: "apache.tmLanguage.json",
      // },
      // {
      //   id: "apex",
      //   scopeName: "source.apex",
      //   path: "apex.tmLanguage.json",
      //   samplePath: "apex.sample",
      // },
      // {
      //   id: "apl",
      //   scopeName: "source.apl",
      //   path: "apl.tmLanguage.json",
      //   embeddedLangs: ["html", "xml", "css", "javascript", "json"],
      // },
      // {
      //   id: "applescript",
      //   scopeName: "source.applescript",
      //   path: "applescript.tmLanguage.json",
      //   samplePath: "applescript.sample",
      // },
      // {
      //   id: "asm",
      //   scopeName: "source.asm.x86_64",
      //   path: "asm.tmLanguage.json",
      //   samplePath: "asm.sample",
      // },
      // {
      //   id: "astro",
      //   scopeName: "text.html.astro",
      //   path: "astro.tmLanguage.json",
      //   samplePath: "astro.sample",
      //   embeddedLangs: [
      //     "css",
      //     "javascript",
      //     "less",
      //     "sass",
      //     "scss",
      //     "stylus",
      //     "typescript",
      //     "tsx",
      //   ],
      // },
      // {
      //   id: "awk",
      //   scopeName: "source.awk",
      //   path: "awk.tmLanguage.json",
      //   samplePath: "awk.sample",
      // },
      {
        id: "ballerina",
        scopeName: "source.ballerina",
        path: "ballerina.tmLanguage.json",
        samplePath: "ballerina.sample",
      },
      // {
      //   id: "bat",
      //   scopeName: "source.batchfile",
      //   path: "bat.tmLanguage.json",
      //   samplePath: "bat.sample",
      //   aliases: ["batch"],
      // },
      // {
      //   id: "berry",
      //   scopeName: "source.berry",
      //   path: "berry.tmLanguage.json",
      //   samplePath: "berry.sample",
      //   aliases: ["be"],
      // },
      // { id: "bibtex", scopeName: "text.bibtex", path: "bibtex.tmLanguage.json" },
      // {
      //   id: "bicep",
      //   scopeName: "source.bicep",
      //   path: "bicep.tmLanguage.json",
      //   samplePath: "bicep.sample",
      // },
      // {
      //   id: "c",
      //   scopeName: "source.c",
      //   path: "c.tmLanguage.json",
      //   samplePath: "c.sample",
      // },
      // {
      //   id: "clojure",
      //   scopeName: "source.clojure",
      //   path: "clojure.tmLanguage.json",
      //   samplePath: "clojure.sample",
      //   aliases: ["clj"],
      // },
      // {
      //   id: "cobol",
      //   scopeName: "source.cobol",
      //   path: "cobol.tmLanguage.json",
      //   samplePath: "cobol.sample",
      //   embeddedLangs: ["sql", "html", "java"],
      // },
      // {
      //   id: "codeql",
      //   scopeName: "source.ql",
      //   path: "codeql.tmLanguage.json",
      //   samplePath: "codeql.sample",
      //   aliases: ["ql"],
      // },
      // {
      //   id: "coffee",
      //   scopeName: "source.coffee",
      //   path: "coffee.tmLanguage.json",
      //   samplePath: "coffee.sample",
      //   embeddedLangs: ["javascript"],
      // },
      // {
      //   id: "cpp",
      //   scopeName: "source.cpp",
      //   path: "cpp.tmLanguage.json",
      //   samplePath: "cpp.sample",
      //   embeddedLangs: ["sql"],
      // },
      // {
      //   id: "crystal",
      //   scopeName: "source.crystal",
      //   path: "crystal.tmLanguage.json",
      //   samplePath: "crystal.sample",
      //   embeddedLangs: ["html", "sql", "css", "c", "javascript", "shellscript"],
      // },
      // {
      //   id: "csharp",
      //   scopeName: "source.cs",
      //   path: "csharp.tmLanguage.json",
      //   samplePath: "csharp.sample",
      //   aliases: ["c#"],
      // },
      // {
      //   id: "css",
      //   scopeName: "source.css",
      //   path: "css.tmLanguage.json",
      //   samplePath: "css.sample",
      // },
      // {
      //   id: "cue",
      //   scopeName: "source.cue",
      //   path: "cue.tmLanguage.json",
      //   samplePath: "cue.sample",
      // },
      // {
      //   id: "d",
      //   scopeName: "source.d",
      //   path: "d.tmLanguage.json",
      //   samplePath: "d.sample",
      // },
      // {
      //   id: "dart",
      //   scopeName: "source.dart",
      //   path: "dart.tmLanguage.json",
      //   samplePath: "dart.sample",
      // },
      // {
      //   id: "diff",
      //   scopeName: "source.diff",
      //   path: "diff.tmLanguage.json",
      //   samplePath: "diff.sample",
      // },
      // {
      //   id: "docker",
      //   scopeName: "source.dockerfile",
      //   path: "docker.tmLanguage.json",
      //   samplePath: "docker.sample",
      // },
      // {
      //   id: "dream-maker",
      //   scopeName: "source.dm",
      //   path: "dream-maker.tmLanguage.json",
      // },
      // {
      //   id: "elixir",
      //   scopeName: "source.elixir",
      //   path: "elixir.tmLanguage.json",
      //   samplePath: "elixir.sample",
      //   embeddedLangs: ["html"],
      // },
      // {
      //   id: "elm",
      //   scopeName: "source.elm",
      //   path: "elm.tmLanguage.json",
      //   samplePath: "elm.sample",
      // },
      // {
      //   id: "erb",
      //   scopeName: "text.html.erb",
      //   path: "erb.tmLanguage.json",
      //   samplePath: "erb.sample",
      //   embeddedLangs: ["html", "ruby"],
      // },
      // {
      //   id: "erlang",
      //   scopeName: "source.erlang",
      //   path: "erlang.tmLanguage.json",
      //   samplePath: "erlang.sample",
      // },
      // {
      //   id: "fish",
      //   scopeName: "source.fish",
      //   path: "fish.tmLanguage.json",
      //   samplePath: "fish.sample",
      // },
      // {
      //   id: "fsharp",
      //   scopeName: "source.fsharp",
      //   path: "fsharp.tmLanguage.json",
      //   samplePath: "fsharp.sample",
      //   aliases: ["f#"],
      //   embeddedLangs: ["markdown"],
      // },
      // {
      //   id: "gherkin",
      //   scopeName: "text.gherkin.feature",
      //   path: "gherkin.tmLanguage.json",
      // },
      // {
      //   id: "git-commit",
      //   scopeName: "text.git-commit",
      //   path: "git-commit.tmLanguage.json",
      //   embeddedLangs: ["diff"],
      // },
      // {
      //   id: "git-rebase",
      //   scopeName: "text.git-rebase",
      //   path: "git-rebase.tmLanguage.json",
      //   embeddedLangs: ["shellscript"],
      // },
      // {
      //   id: "gnuplot",
      //   scopeName: "source.gnuplot",
      //   path: "gnuplot.tmLanguage.json",
      // },
      // {
      //   id: "go",
      //   scopeName: "source.go",
      //   path: "go.tmLanguage.json",
      //   samplePath: "go.sample",
      // },
      // {
      //   id: "graphql",
      //   scopeName: "source.graphql",
      //   path: "graphql.tmLanguage.json",
      //   embeddedLangs: ["javascript", "typescript", "jsx", "tsx"],
      // },
      // {
      //   id: "groovy",
      //   scopeName: "source.groovy",
      //   path: "groovy.tmLanguage.json",
      // },
      // {
      //   id: "hack",
      //   scopeName: "source.hack",
      //   path: "hack.tmLanguage.json",
      //   embeddedLangs: ["html", "sql"],
      // },
      // {
      //   id: "haml",
      //   scopeName: "text.haml",
      //   path: "haml.tmLanguage.json",
      //   embeddedLangs: [
      //     "ruby",
      //     "javascript",
      //     "sass",
      //     "coffee",
      //     "markdown",
      //     "css",
      //   ],
      // },
      // {
      //   id: "handlebars",
      //   scopeName: "text.html.handlebars",
      //   path: "handlebars.tmLanguage.json",
      //   aliases: ["hbs"],
      //   embeddedLangs: ["html", "css", "javascript", "yaml"],
      // },
      // {
      //   id: "haskell",
      //   scopeName: "source.haskell",
      //   path: "haskell.tmLanguage.json",
      // },
      // { id: "hcl", scopeName: "source.hcl", path: "hcl.tmLanguage.json" },
      // { id: "hlsl", scopeName: "source.hlsl", path: "hlsl.tmLanguage.json" },
      // {
      //   id: "html",
      //   scopeName: "text.html.basic",
      //   path: "html.tmLanguage.json",
      //   samplePath: "html.sample",
      //   embeddedLangs: ["javascript", "css"],
      // },
      // { id: "ini", scopeName: "source.ini", path: "ini.tmLanguage.json" },
      // {
      //   id: "java",
      //   scopeName: "source.java",
      //   path: "java.tmLanguage.json",
      //   samplePath: "java.sample",
      // },
      // {
      //   id: "javascript",
      //   scopeName: "source.js",
      //   path: "javascript.tmLanguage.json",
      //   samplePath: "javascript.sample",
      //   aliases: ["js"],
      // },
      // {
      //   id: "jinja-html",
      //   scopeName: "text.html.jinja",
      //   path: "jinja-html.tmLanguage.json",
      //   embeddedLangs: ["html"],
      // },
      // { id: "json", scopeName: "source.json", path: "json.tmLanguage.json" },
      // {
      //   id: "jsonc",
      //   scopeName: "source.json.comments",
      //   path: "jsonc.tmLanguage.json",
      // },
      // {
      //   id: "jsonnet",
      //   scopeName: "source.jsonnet",
      //   path: "jsonnet.tmLanguage.json",
      // },
      // {
      //   id: "jssm",
      //   scopeName: "source.jssm",
      //   path: "jssm.tmLanguage.json",
      //   samplePath: "jssm.sample",
      //   aliases: ["fsl"],
      // },
      // { id: "jsx", scopeName: "source.js.jsx", path: "jsx.tmLanguage.json" },
      // {
      //   id: "julia",
      //   scopeName: "source.julia",
      //   path: "julia.tmLanguage.json",
      //   embeddedLangs: ["cpp", "python", "javascript", "r", "sql"],
      // },
      // {
      //   id: "jupyter",
      //   scopeName: "source.jupyter",
      //   path: "jupyter.tmLanguage.json",
      //   embeddedLangs: ["json"],
      // },
      // {
      //   id: "kotlin",
      //   scopeName: "source.kotlin",
      //   path: "kotlin.tmLanguage.json",
      // },
      // {
      //   id: "latex",
      //   scopeName: "text.tex.latex",
      //   path: "latex.tmLanguage.json",
      //   embeddedLangs: [
      //     "tex",
      //     "css",
      //     "html",
      //     "java",
      //     "javascript",
      //     "typescript",
      //     "lua",
      //     "python",
      //     "julia",
      //     "ruby",
      //     "xml",
      //     "yaml",
      //     "cpp",
      //     "haskell",
      //     "scala",
      //     "gnuplot",
      //   ],
      // },
      // {
      //   id: "less",
      //   scopeName: "source.css.less",
      //   path: "less.tmLanguage.json",
      //   embeddedLangs: ["css"],
      // },
      // { id: "lisp", scopeName: "source.lisp", path: "lisp.tmLanguage.json" },
      // { id: "logo", scopeName: "source.logo", path: "logo.tmLanguage.json" },
      // {
      //   id: "lua",
      //   scopeName: "source.lua",
      //   path: "lua.tmLanguage.json",
      //   embeddedLangs: ["c"],
      // },
      // {
      //   id: "make",
      //   scopeName: "source.makefile",
      //   path: "make.tmLanguage.json",
      //   aliases: ["makefile"],
      // },
      // {
      //   id: "markdown",
      //   scopeName: "text.html.markdown",
      //   path: "markdown.tmLanguage.json",
      //   aliases: ["md"],
      //   embeddedLangs: [
      //     "css",
      //     "html",
      //     "ini",
      //     "java",
      //     "lua",
      //     "make",
      //     "perl",
      //     "r",
      //     "ruby",
      //     "php",
      //     "sql",
      //     "vb",
      //     "xml",
      //     "xsl",
      //     "yaml",
      //     "bat",
      //     "clojure",
      //     "coffee",
      //     "c",
      //     "cpp",
      //     "diff",
      //     "docker",
      //     "git-commit",
      //     "git-rebase",
      //     "go",
      //     "groovy",
      //     "pug",
      //     "javascript",
      //     "json",
      //     "jsonc",
      //     "less",
      //     "objective-c",
      //     "swift",
      //     "scss",
      //     "raku",
      //     "powershell",
      //     "python",
      //     "rust",
      //     "scala",
      //     "shellscript",
      //     "typescript",
      //     "tsx",
      //     "csharp",
      //     "fsharp",
      //     "dart",
      //     "handlebars",
      //     "erlang",
      //     "elixir",
      //     "latex",
      //     "bibtex",
      //   ],
      // },
      // {
      //   id: "marko",
      //   scopeName: "text.marko",
      //   path: "marko.tmLanguage.json",
      //   samplePath: "marko.sample",
      //   embeddedLangs: ["css", "less", "scss", "javascript"],
      // },
      // {
      //   id: "matlab",
      //   scopeName: "source.matlab",
      //   path: "matlab.tmLanguage.json",
      // },
      // {
      //   id: "mdx",
      //   scopeName: "text.html.markdown.jsx",
      //   path: "mdx.tmLanguage.json",
      //   embeddedLangs: ["jsx", "markdown"],
      // },
      // {
      //   id: "nginx",
      //   scopeName: "source.nginx",
      //   path: "nginx.tmLanguage.json",
      //   embeddedLangs: ["lua"],
      // },
      // {
      //   id: "nim",
      //   scopeName: "source.nim",
      //   path: "nim.tmLanguage.json",
      //   embeddedLangs: ["c", "html", "xml", "javascript", "css", "markdown"],
      // },
      // { id: "nix", scopeName: "source.nix", path: "nix.tmLanguage.json" },
      // {
      //   id: "objective-c",
      //   scopeName: "source.objc",
      //   path: "objective-c.tmLanguage.json",
      //   aliases: ["objc"],
      // },
      // {
      //   id: "objective-cpp",
      //   scopeName: "source.objcpp",
      //   path: "objective-cpp.tmLanguage.json",
      // },
      // { id: "ocaml", scopeName: "source.ocaml", path: "ocaml.tmLanguage.json" },
      // {
      //   id: "pascal",
      //   scopeName: "source.pascal",
      //   path: "pascal.tmLanguage.json",
      // },
      // {
      //   id: "perl",
      //   scopeName: "source.perl",
      //   path: "perl.tmLanguage.json",
      //   embeddedLangs: ["html", "xml", "css", "javascript", "sql"],
      // },
      // {
      //   id: "php",
      //   scopeName: "source.php",
      //   path: "php.tmLanguage.json",
      //   embeddedLangs: ["html", "xml", "sql", "javascript", "json", "css"],
      // },
      // {
      //   id: "plsql",
      //   scopeName: "source.plsql.oracle",
      //   path: "plsql.tmLanguage.json",
      // },
      // {
      //   id: "postcss",
      //   scopeName: "source.css.postcss",
      //   path: "postcss.tmLanguage.json",
      // },
      // {
      //   id: "powershell",
      //   scopeName: "source.powershell",
      //   path: "powershell.tmLanguage.json",
      //   aliases: ["ps", "ps1"],
      // },
      // {
      //   id: "prisma",
      //   scopeName: "source.prisma",
      //   path: "prisma.tmLanguage.json",
      //   samplePath: "prisma.sample",
      // },
      // {
      //   id: "prolog",
      //   scopeName: "source.prolog",
      //   path: "prolog.tmLanguage.json",
      // },
      // {
      //   id: "pug",
      //   scopeName: "text.pug",
      //   path: "pug.tmLanguage.json",
      //   aliases: ["jade"],
      //   embeddedLangs: ["javascript", "css", "sass", "stylus", "coffee", "html"],
      // },
      // {
      //   id: "puppet",
      //   scopeName: "source.puppet",
      //   path: "puppet.tmLanguage.json",
      // },
      // {
      //   id: "purescript",
      //   scopeName: "source.purescript",
      //   path: "purescript.tmLanguage.json",
      // },
      // {
      //   id: "python",
      //   scopeName: "source.python",
      //   path: "python.tmLanguage.json",
      //   samplePath: "python.sample",
      //   aliases: ["py"],
      // },
      // { id: "r", scopeName: "source.r", path: "r.tmLanguage.json" },
      // {
      //   id: "raku",
      //   scopeName: "source.perl.6",
      //   path: "raku.tmLanguage.json",
      //   aliases: ["perl6"],
      // },
      // {
      //   id: "razor",
      //   scopeName: "text.aspnetcorerazor",
      //   path: "razor.tmLanguage.json",
      //   embeddedLangs: ["html", "csharp"],
      // },
      // {
      //   id: "rel",
      //   scopeName: "source.rel",
      //   path: "rel.tmLanguage.json",
      //   samplePath: "rel.sample",
      // },
      // { id: "riscv", scopeName: "source.riscv", path: "riscv.tmLanguage.json" },
      // {
      //   id: "ruby",
      //   scopeName: "source.ruby",
      //   path: "ruby.tmLanguage.json",
      //   samplePath: "ruby.sample",
      //   aliases: ["rb"],
      //   embeddedLangs: [
      //     "html",
      //     "xml",
      //     "sql",
      //     "css",
      //     "c",
      //     "javascript",
      //     "shellscript",
      //     "lua",
      //   ],
      // },
      // {
      //   id: "rust",
      //   scopeName: "source.rust",
      //   path: "rust.tmLanguage.json",
      //   aliases: ["rs"],
      // },
      // {
      //   id: "sas",
      //   scopeName: "source.sas",
      //   path: "sas.tmLanguage.json",
      //   embeddedLangs: ["sql"],
      // },
      // { id: "sass", scopeName: "source.sass", path: "sass.tmLanguage.json" },
      // { id: "scala", scopeName: "source.scala", path: "scala.tmLanguage.json" },
      // {
      //   id: "scheme",
      //   scopeName: "source.scheme",
      //   path: "scheme.tmLanguage.json",
      // },
      // {
      //   id: "scss",
      //   scopeName: "source.css.scss",
      //   path: "scss.tmLanguage.json",
      //   embeddedLangs: ["css"],
      // },
      // {
      //   id: "shaderlab",
      //   scopeName: "source.shaderlab",
      //   path: "shaderlab.tmLanguage.json",
      //   aliases: ["shader"],
      //   embeddedLangs: ["hlsl"],
      // },
      // {
      //   id: "shellscript",
      //   scopeName: "source.shell",
      //   path: "shellscript.tmLanguage.json",
      //   aliases: ["shell", "bash", "sh", "zsh"],
      //   embeddedLangs: ["ruby", "python", "applescript", "html", "markdown"],
      // },
      // {
      //   id: "smalltalk",
      //   scopeName: "source.smalltalk",
      //   path: "smalltalk.tmLanguage.json",
      // },
      // {
      //   id: "solidity",
      //   scopeName: "source.solidity",
      //   path: "solidity.tmLanguage.json",
      // },
      // {
      //   id: "sparql",
      //   scopeName: "source.sparql",
      //   path: "sparql.tmLanguage.json",
      //   samplePath: "sparql.sample",
      //   embeddedLangs: ["turtle"],
      // },
      // { id: "sql", scopeName: "source.sql", path: "sql.tmLanguage.json" },
      // {
      //   id: "ssh-config",
      //   scopeName: "source.ssh-config",
      //   path: "ssh-config.tmLanguage.json",
      // },
      // {
      //   id: "stata",
      //   scopeName: "source.stata",
      //   path: "stata.tmLanguage.json",
      //   samplePath: "stata.sample",
      //   embeddedLangs: ["sql"],
      // },
      // {
      //   id: "stylus",
      //   scopeName: "source.stylus",
      //   path: "stylus.tmLanguage.json",
      //   aliases: ["styl"],
      // },
      // {
      //   id: "svelte",
      //   scopeName: "source.svelte",
      //   path: "svelte.tmLanguage.json",
      //   embeddedLangs: [
      //     "javascript",
      //     "typescript",
      //     "coffee",
      //     "stylus",
      //     "sass",
      //     "css",
      //     "scss",
      //     "less",
      //     "postcss",
      //     "pug",
      //     "markdown",
      //   ],
      // },
      // { id: "swift", scopeName: "source.swift", path: "swift.tmLanguage.json" },
      // {
      //   id: "system-verilog",
      //   scopeName: "source.systemverilog",
      //   path: "system-verilog.tmLanguage.json",
      // },
      // {
      //   id: "tasl",
      //   scopeName: "source.tasl",
      //   path: "tasl.tmLanguage.json",
      //   samplePath: "tasl.sample",
      // },
      // { id: "tcl", scopeName: "source.tcl", path: "tcl.tmLanguage.json" },
      // {
      //   id: "tex",
      //   scopeName: "text.tex",
      //   path: "tex.tmLanguage.json",
      //   embeddedLangs: ["r"],
      // },
      // { id: "toml", scopeName: "source.toml", path: "toml.tmLanguage.json" },
      // {
      //   id: "tsx",
      //   scopeName: "source.tsx",
      //   path: "tsx.tmLanguage.json",
      //   samplePath: "tsx.sample",
      // },
      // {
      //   id: "turtle",
      //   scopeName: "source.turtle",
      //   path: "turtle.tmLanguage.json",
      //   samplePath: "turtle.sample",
      // },
      // {
      //   id: "twig",
      //   scopeName: "text.html.twig",
      //   path: "twig.tmLanguage.json",
      //   embeddedLangs: ["css", "javascript", "php", "python", "ruby"],
      // },
      // {
      //   id: "typescript",
      //   scopeName: "source.ts",
      //   path: "typescript.tmLanguage.json",
      //   aliases: ["ts"],
      // },
      // {
      //   id: "vb",
      //   scopeName: "source.asp.vb.net",
      //   path: "vb.tmLanguage.json",
      //   aliases: ["cmd"],
      // },
      // {
      //   id: "verilog",
      //   scopeName: "source.verilog",
      //   path: "verilog.tmLanguage.json",
      // },
      // { id: "vhdl", scopeName: "source.vhdl", path: "vhdl.tmLanguage.json" },
      // {
      //   id: "viml",
      //   scopeName: "source.viml",
      //   path: "viml.tmLanguage.json",
      //   aliases: ["vim", "vimscript"],
      // },
      // {
      //   id: "vue-html",
      //   scopeName: "text.html.vue-html",
      //   path: "vue-html.tmLanguage.json",
      //   embeddedLangs: ["vue", "javascript"],
      // },
      // {
      //   id: "vue",
      //   scopeName: "source.vue",
      //   path: "vue.tmLanguage.json",
      //   embeddedLangs: [
      //     "json",
      //     "markdown",
      //     "pug",
      //     "haml",
      //     "vue-html",
      //     "sass",
      //     "scss",
      //     "less",
      //     "stylus",
      //     "postcss",
      //     "css",
      //     "typescript",
      //     "coffee",
      //     "javascript",
      //   ],
      // },
      // { id: "wasm", scopeName: "source.wat", path: "wasm.tmLanguage.json" },
      // {
      //   id: "wenyan",
      //   scopeName: "source.wenyan",
      //   path: "wenyan.tmLanguage.json",
      //   aliases: ["文言"],
      // },
      // {
      //   id: "xml",
      //   scopeName: "text.xml",
      //   path: "xml.tmLanguage.json",
      //   embeddedLangs: ["java"],
      // },
      // {
      //   id: "xsl",
      //   scopeName: "text.xml.xsl",
      //   path: "xsl.tmLanguage.json",
      //   embeddedLangs: ["xml"],
      // },
      // { id: "yaml", scopeName: "source.yaml", path: "yaml.tmLanguage.json" },
      // {
      //   id: "zenscript",
      //   scopeName: "source.zenscript",
      //   path: "zenscript.tmLanguage.json",
      //   samplePath: "zenscript.sample",
      // },
    ];
    var n;
    (e.FontStyle = void 0),
      ((n = e.FontStyle || (e.FontStyle = {}))[(n.NotSet = -1)] = "NotSet"),
      (n[(n.None = 0)] = "None"),
      (n[(n.Italic = 1)] = "Italic"),
      (n[(n.Bold = 2)] = "Bold"),
      (n[(n.Underline = 4)] = "Underline");
    class r {
      static toBinaryStr(e) {
        let t = e.toString(2);
        for (; t.length < 32; ) t = "0" + t;
        return t;
      }
      static printMetadata(e) {
        let t = r.getLanguageId(e),
          n = r.getTokenType(e),
          a = r.getFontStyle(e),
          s = r.getForeground(e),
          o = r.getBackground(e);
        console.log({
          languageId: t,
          tokenType: n,
          fontStyle: a,
          foreground: s,
          background: o,
        });
      }
      static getLanguageId(e) {
        return (255 & e) >>> 0;
      }
      static getTokenType(e) {
        return (1792 & e) >>> 8;
      }
      static getFontStyle(e) {
        return (14336 & e) >>> 11;
      }
      static getForeground(e) {
        return (8372224 & e) >>> 14;
      }
      static getBackground(e) {
        return (4286578688 & e) >>> 23;
      }
      static set(t, n, a, s, o, i) {
        let c = r.getLanguageId(t),
          u = r.getTokenType(t),
          l = r.getFontStyle(t),
          p = r.getForeground(t),
          h = r.getBackground(t);
        return (
          0 !== n && (c = n),
          0 !== a && (u = 8 === a ? 0 : a),
          s !== e.FontStyle.NotSet && (l = s),
          0 !== o && (p = o),
          0 !== i && (h = i),
          ((c << 0) | (u << 8) | (l << 11) | (p << 14) | (h << 23)) >>> 0
        );
      }
    }
    function a(e) {
      return e.endsWith("/") || e.endsWith("\\") ? e.slice(0, -1) : e;
    }
    function s(e) {
      return e.startsWith("./") ? e.slice(2) : e;
    }
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self && self;
    var o,
      i,
      c,
      u = { exports: {} };
    function l(e, t) {
      void 0 === t && (t = !1);
      var n = e.length,
        r = 0,
        a = "",
        s = 0,
        o = 16,
        i = 0,
        c = 0,
        u = 0,
        l = 0,
        f = 0;
      function g(t, n) {
        for (var a = 0, s = 0; a < t || !n; ) {
          var o = e.charCodeAt(r);
          if (o >= 48 && o <= 57) s = 16 * s + o - 48;
          else if (o >= 65 && o <= 70) s = 16 * s + o - 65 + 10;
          else {
            if (!(o >= 97 && o <= 102)) break;
            s = 16 * s + o - 97 + 10;
          }
          r++, a++;
        }
        return a < t && (s = -1), s;
      }
      function m() {
        if (((a = ""), (f = 0), (s = r), (c = i), (l = u), r >= n))
          return (s = n), (o = 17);
        var t = e.charCodeAt(r);
        if (p(t)) {
          do {
            r++, (a += String.fromCharCode(t)), (t = e.charCodeAt(r));
          } while (p(t));
          return (o = 15);
        }
        if (h(t))
          return (
            r++,
            (a += String.fromCharCode(t)),
            13 === t && 10 === e.charCodeAt(r) && (r++, (a += "\n")),
            i++,
            (u = r),
            (o = 14)
          );
        switch (t) {
          case 123:
            return r++, (o = 1);
          case 125:
            return r++, (o = 2);
          case 91:
            return r++, (o = 3);
          case 93:
            return r++, (o = 4);
          case 58:
            return r++, (o = 6);
          case 44:
            return r++, (o = 5);
          case 34:
            return (
              r++,
              (a = (function () {
                for (var t = "", a = r; ; ) {
                  if (r >= n) {
                    (t += e.substring(a, r)), (f = 2);
                    break;
                  }
                  var s = e.charCodeAt(r);
                  if (34 === s) {
                    (t += e.substring(a, r)), r++;
                    break;
                  }
                  if (92 !== s) {
                    if (s >= 0 && s <= 31) {
                      if (h(s)) {
                        (t += e.substring(a, r)), (f = 2);
                        break;
                      }
                      f = 6;
                    }
                    r++;
                  } else {
                    if (((t += e.substring(a, r)), ++r >= n)) {
                      f = 2;
                      break;
                    }
                    switch (e.charCodeAt(r++)) {
                      case 34:
                        t += '"';
                        break;
                      case 92:
                        t += "\\";
                        break;
                      case 47:
                        t += "/";
                        break;
                      case 98:
                        t += "\b";
                        break;
                      case 102:
                        t += "\f";
                        break;
                      case 110:
                        t += "\n";
                        break;
                      case 114:
                        t += "\r";
                        break;
                      case 116:
                        t += "\t";
                        break;
                      case 117:
                        var o = g(4, !0);
                        o >= 0 ? (t += String.fromCharCode(o)) : (f = 4);
                        break;
                      default:
                        f = 5;
                    }
                    a = r;
                  }
                }
                return t;
              })()),
              (o = 10)
            );
          case 47:
            var m = r - 1;
            if (47 === e.charCodeAt(r + 1)) {
              for (r += 2; r < n && !h(e.charCodeAt(r)); ) r++;
              return (a = e.substring(m, r)), (o = 12);
            }
            if (42 === e.charCodeAt(r + 1)) {
              r += 2;
              for (var y = n - 1, v = !1; r < y; ) {
                var b = e.charCodeAt(r);
                if (42 === b && 47 === e.charCodeAt(r + 1)) {
                  (r += 2), (v = !0);
                  break;
                }
                r++,
                  h(b) &&
                    (13 === b && 10 === e.charCodeAt(r) && r++, i++, (u = r));
              }
              return v || (r++, (f = 1)), (a = e.substring(m, r)), (o = 13);
            }
            return (a += String.fromCharCode(t)), r++, (o = 16);
          case 45:
            if (((a += String.fromCharCode(t)), ++r === n || !d(e.charCodeAt(r))))
              return (o = 16);
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return (
              (a += (function () {
                var t = r;
                if (48 === e.charCodeAt(r)) r++;
                else for (r++; r < e.length && d(e.charCodeAt(r)); ) r++;
                if (r < e.length && 46 === e.charCodeAt(r)) {
                  if (!(++r < e.length && d(e.charCodeAt(r))))
                    return (f = 3), e.substring(t, r);
                  for (r++; r < e.length && d(e.charCodeAt(r)); ) r++;
                }
                var n = r;
                if (
                  r < e.length &&
                  (69 === e.charCodeAt(r) || 101 === e.charCodeAt(r))
                )
                  if (
                    (((++r < e.length && 43 === e.charCodeAt(r)) ||
                      45 === e.charCodeAt(r)) &&
                      r++,
                    r < e.length && d(e.charCodeAt(r)))
                  ) {
                    for (r++; r < e.length && d(e.charCodeAt(r)); ) r++;
                    n = r;
                  } else f = 3;
                return e.substring(t, n);
              })()),
              (o = 11)
            );
          default:
            for (; r < n && _(t); ) r++, (t = e.charCodeAt(r));
            if (s !== r) {
              switch ((a = e.substring(s, r))) {
                case "true":
                  return (o = 8);
                case "false":
                  return (o = 9);
                case "null":
                  return (o = 7);
              }
              return (o = 16);
            }
            return (a += String.fromCharCode(t)), r++, (o = 16);
        }
      }
      function _(e) {
        if (p(e) || h(e)) return !1;
        switch (e) {
          case 125:
          case 93:
          case 123:
          case 91:
          case 34:
          case 58:
          case 44:
          case 47:
            return !1;
        }
        return !0;
      }
      return {
        setPosition: function (e) {
          (r = e), (a = ""), (s = 0), (o = 16), (f = 0);
        },
        getPosition: function () {
          return r;
        },
        scan: t
          ? function () {
              var e;
              do {
                e = m();
              } while (e >= 12 && e <= 15);
              return e;
            }
          : m,
        getToken: function () {
          return o;
        },
        getTokenValue: function () {
          return a;
        },
        getTokenOffset: function () {
          return s;
        },
        getTokenLength: function () {
          return r - s;
        },
        getTokenStartLine: function () {
          return c;
        },
        getTokenStartCharacter: function () {
          return s - l;
        },
        getTokenError: function () {
          return f;
        },
      };
    }
    function p(e) {
      return (
        32 === e ||
        9 === e ||
        11 === e ||
        12 === e ||
        160 === e ||
        5760 === e ||
        (e >= 8192 && e <= 8203) ||
        8239 === e ||
        8287 === e ||
        12288 === e ||
        65279 === e
      );
    }
    function h(e) {
      return 10 === e || 13 === e || 8232 === e || 8233 === e;
    }
    function d(e) {
      return e >= 48 && e <= 57;
    }
    (u.exports =
      ((o = {
        770: function (e, t, n) {
          var r =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.setDefaultDebugCall =
              t.createOnigScanner =
              t.createOnigString =
              t.loadWASM =
              t.OnigScanner =
              t.OnigString =
                void 0);
          const a = r(n(418));
          let s = null,
            o = !1;
          class i {
            constructor(e) {
              const t = e.length,
                n = i._utf8ByteLength(e),
                r = n !== t,
                a = r ? new Uint32Array(t + 1) : null;
              r && (a[t] = n);
              const s = r ? new Uint32Array(n + 1) : null;
              r && (s[n] = t);
              const o = new Uint8Array(n);
              let c = 0;
              for (let n = 0; n < t; n++) {
                const i = e.charCodeAt(n);
                let u = i,
                  l = !1;
                if (i >= 55296 && i <= 56319 && n + 1 < t) {
                  const t = e.charCodeAt(n + 1);
                  t >= 56320 &&
                    t <= 57343 &&
                    ((u = (65536 + ((i - 55296) << 10)) | (t - 56320)), (l = !0));
                }
                r &&
                  ((a[n] = c),
                  l && (a[n + 1] = c),
                  u <= 127
                    ? (s[c + 0] = n)
                    : u <= 2047
                    ? ((s[c + 0] = n), (s[c + 1] = n))
                    : u <= 65535
                    ? ((s[c + 0] = n), (s[c + 1] = n), (s[c + 2] = n))
                    : ((s[c + 0] = n),
                      (s[c + 1] = n),
                      (s[c + 2] = n),
                      (s[c + 3] = n))),
                  u <= 127
                    ? (o[c++] = u)
                    : u <= 2047
                    ? ((o[c++] = 192 | ((1984 & u) >>> 6)),
                      (o[c++] = 128 | ((63 & u) >>> 0)))
                    : u <= 65535
                    ? ((o[c++] = 224 | ((61440 & u) >>> 12)),
                      (o[c++] = 128 | ((4032 & u) >>> 6)),
                      (o[c++] = 128 | ((63 & u) >>> 0)))
                    : ((o[c++] = 240 | ((1835008 & u) >>> 18)),
                      (o[c++] = 128 | ((258048 & u) >>> 12)),
                      (o[c++] = 128 | ((4032 & u) >>> 6)),
                      (o[c++] = 128 | ((63 & u) >>> 0))),
                  l && n++;
              }
              (this.utf16Length = t),
                (this.utf8Length = n),
                (this.utf16Value = e),
                (this.utf8Value = o),
                (this.utf16OffsetToUtf8 = a),
                (this.utf8OffsetToUtf16 = s);
            }
            static _utf8ByteLength(e) {
              let t = 0;
              for (let n = 0, r = e.length; n < r; n++) {
                const a = e.charCodeAt(n);
                let s = a,
                  o = !1;
                if (a >= 55296 && a <= 56319 && n + 1 < r) {
                  const t = e.charCodeAt(n + 1);
                  t >= 56320 &&
                    t <= 57343 &&
                    ((s = (65536 + ((a - 55296) << 10)) | (t - 56320)), (o = !0));
                }
                (t += s <= 127 ? 1 : s <= 2047 ? 2 : s <= 65535 ? 3 : 4),
                  o && n++;
              }
              return t;
            }
            createString(e) {
              const t = e._omalloc(this.utf8Length);
              return e.HEAPU8.set(this.utf8Value, t), t;
            }
          }
          class c {
            constructor(e) {
              if (((this.id = ++c.LAST_ID), !s))
                throw new Error("Must invoke loadWASM first.");
              (this._onigBinding = s), (this.content = e);
              const t = new i(e);
              (this.utf16Length = t.utf16Length),
                (this.utf8Length = t.utf8Length),
                (this.utf16OffsetToUtf8 = t.utf16OffsetToUtf8),
                (this.utf8OffsetToUtf16 = t.utf8OffsetToUtf16),
                this.utf8Length < 1e4 && !c._sharedPtrInUse
                  ? (c._sharedPtr || (c._sharedPtr = s._omalloc(1e4)),
                    (c._sharedPtrInUse = !0),
                    s.HEAPU8.set(t.utf8Value, c._sharedPtr),
                    (this.ptr = c._sharedPtr))
                  : (this.ptr = t.createString(s));
            }
            convertUtf8OffsetToUtf16(e) {
              return this.utf8OffsetToUtf16
                ? e < 0
                  ? 0
                  : e > this.utf8Length
                  ? this.utf16Length
                  : this.utf8OffsetToUtf16[e]
                : e;
            }
            convertUtf16OffsetToUtf8(e) {
              return this.utf16OffsetToUtf8
                ? e < 0
                  ? 0
                  : e > this.utf16Length
                  ? this.utf8Length
                  : this.utf16OffsetToUtf8[e]
                : e;
            }
            dispose() {
              this.ptr === c._sharedPtr
                ? (c._sharedPtrInUse = !1)
                : this._onigBinding._ofree(this.ptr);
            }
          }
          (t.OnigString = c),
            (c.LAST_ID = 0),
            (c._sharedPtr = 0),
            (c._sharedPtrInUse = !1);
          class u {
            constructor(e) {
              if (!s) throw new Error("Must invoke loadWASM first.");
              const t = [],
                n = [];
              for (let r = 0, a = e.length; r < a; r++) {
                const a = new i(e[r]);
                (t[r] = a.createString(s)), (n[r] = a.utf8Length);
              }
              const r = s._omalloc(4 * e.length);
              s.HEAPU32.set(t, r / 4);
              const a = s._omalloc(4 * e.length);
              s.HEAPU32.set(n, a / 4);
              const o = s._createOnigScanner(r, a, e.length);
              for (let n = 0, r = e.length; n < r; n++) s._ofree(t[n]);
              s._ofree(a),
                s._ofree(r),
                0 === o &&
                  (function (e) {
                    throw new Error(e.UTF8ToString(e._getLastOnigError()));
                  })(s),
                (this._onigBinding = s),
                (this._ptr = o);
            }
            dispose() {
              this._onigBinding._freeOnigScanner(this._ptr);
            }
            findNextMatchSync(e, t, n) {
              let r = o,
                a = 0;
              if (
                ("number" == typeof n
                  ? (8 & n && (r = !0), (a = n))
                  : "boolean" == typeof n && (r = n),
                "string" == typeof e)
              ) {
                e = new c(e);
                const n = this._findNextMatchSync(e, t, r, a);
                return e.dispose(), n;
              }
              return this._findNextMatchSync(e, t, r, a);
            }
            _findNextMatchSync(e, t, n, r) {
              const a = this._onigBinding;
              let s;
              if (
                ((s = n
                  ? a._findNextOnigScannerMatchDbg(
                      this._ptr,
                      e.id,
                      e.ptr,
                      e.utf8Length,
                      e.convertUtf16OffsetToUtf8(t),
                      r
                    )
                  : a._findNextOnigScannerMatch(
                      this._ptr,
                      e.id,
                      e.ptr,
                      e.utf8Length,
                      e.convertUtf16OffsetToUtf8(t),
                      r
                    )),
                0 === s)
              )
                return null;
              const o = a.HEAPU32;
              let i = s / 4;
              const c = o[i++],
                u = o[i++];
              let l = [];
              for (let t = 0; t < u; t++) {
                const n = e.convertUtf8OffsetToUtf16(o[i++]),
                  r = e.convertUtf8OffsetToUtf16(o[i++]);
                l[t] = { start: n, end: r, length: r - n };
              }
              return { index: c, captureIndices: l };
            }
          }
          t.OnigScanner = u;
          let l = !1,
            p = null;
          (t.loadWASM = function (e) {
            if (l) return p;
            let t, n, r, o;
            if (
              ((l = !0),
              (function (e) {
                return "function" == typeof e.instantiator;
              })(e))
            )
              (t = e.instantiator), (n = e.print);
            else {
              let r;
              e instanceof ArrayBuffer || e instanceof Response
                ? (r = e)
                : ((r = e.data), (n = e.print)),
                (t =
                  r instanceof ArrayBuffer
                    ? (function (e) {
                        return (t) => WebAssembly.instantiate(e, t);
                      })(r)
                    : r instanceof Response &&
                      "function" == typeof WebAssembly.instantiateStreaming
                    ? (function (e) {
                        return (t) => WebAssembly.instantiateStreaming(e, t);
                      })(r)
                    : (function (e) {
                        return async (t) => {
                          const n = await e.arrayBuffer();
                          return WebAssembly.instantiate(n, t);
                        };
                      })(r));
            }
            return (
              (p = new Promise((e, t) => {
                (r = e), (o = t);
              })),
              (function (e, t, n, r) {
                a.default({
                  print: t,
                  instantiateWasm: (t, n) => {
                    if ("undefined" == typeof performance) {
                      const e = () => Date.now();
                      (t.env.emscripten_get_now = e),
                        (t.wasi_snapshot_preview1.emscripten_get_now = e);
                    }
                    return e(t).then((e) => n(e.instance), r), {};
                  },
                }).then((e) => {
                  (s = e), n();
                });
              })(t, n, r, o),
              p
            );
          }),
            (t.createOnigString = function (e) {
              return new c(e);
            }),
            (t.createOnigScanner = function (e) {
              return new u(e);
            }),
            (t.setDefaultDebugCall = function (e) {
              o = e;
            });
        },
        418: (e) => {
          var t =
            ("undefined" != typeof document &&
              document.currentScript &&
              document.currentScript.src,
            function (e) {
              var t,
                n,
                r = void 0 !== (e = e || {}) ? e : {};
              r.ready = new Promise(function (e, r) {
                (t = e), (n = r);
              });
              var a,
                s = {};
              for (a in r) r.hasOwnProperty(a) && (s[a] = r[a]);
              var o,
                i = !1,
                c = "";
              function u(e) {
                return r.locateFile ? r.locateFile(e, c) : c + e;
              }
              (o = function (e) {
                var t;
                return "function" == typeof readbuffer
                  ? new Uint8Array(readbuffer(e))
                  : (g("object" == typeof (t = read(e, "binary"))), t);
              }),
                "undefined" != typeof scriptArgs && scriptArgs,
                "undefined" != typeof onig_print &&
                  ("undefined" == typeof console && (console = {}),
                  (console.log = onig_print),
                  (console.warn = console.error =
                    "undefined" != typeof printErr ? printErr : onig_print));
              var l,
                p,
                h = r.print || console.log.bind(console),
                d = r.printErr || console.warn.bind(console);
              for (a in s) s.hasOwnProperty(a) && (r[a] = s[a]);
              (s = null),
                r.arguments && r.arguments,
                r.thisProgram && r.thisProgram,
                r.quit && r.quit,
                r.wasmBinary && (l = r.wasmBinary),
                r.noExitRuntime,
                "object" != typeof WebAssembly &&
                  F("no native wasm support detected");
              var f = !1;
              function g(e, t) {
                e || F("Assertion failed: " + t);
              }
              var m,
                _,
                y,
                v =
                  "undefined" != typeof TextDecoder
                    ? new TextDecoder("utf8")
                    : void 0;
              function b(e, t, n) {
                for (var r = t + n, a = t; e[a] && !(a >= r); ) ++a;
                if (a - t > 16 && e.subarray && v)
                  return v.decode(e.subarray(t, a));
                for (var s = ""; t < a; ) {
                  var o = e[t++];
                  if (128 & o) {
                    var i = 63 & e[t++];
                    if (192 != (224 & o)) {
                      var c = 63 & e[t++];
                      if (
                        (o =
                          224 == (240 & o)
                            ? ((15 & o) << 12) | (i << 6) | c
                            : ((7 & o) << 18) |
                              (i << 12) |
                              (c << 6) |
                              (63 & e[t++])) < 65536
                      )
                        s += String.fromCharCode(o);
                      else {
                        var u = o - 65536;
                        s += String.fromCharCode(
                          55296 | (u >> 10),
                          56320 | (1023 & u)
                        );
                      }
                    } else s += String.fromCharCode(((31 & o) << 6) | i);
                  } else s += String.fromCharCode(o);
                }
                return s;
              }
              function k(e, t) {
                return e ? b(_, e, t) : "";
              }
              function L(e, t) {
                return e % t > 0 && (e += t - (e % t)), e;
              }
              function w(e) {
                (m = e),
                  (r.HEAP8 = new Int8Array(e)),
                  (r.HEAP16 = new Int16Array(e)),
                  (r.HEAP32 = y = new Int32Array(e)),
                  (r.HEAPU8 = _ = new Uint8Array(e)),
                  (r.HEAPU16 = new Uint16Array(e)),
                  (r.HEAPU32 = new Uint32Array(e)),
                  (r.HEAPF32 = new Float32Array(e)),
                  (r.HEAPF64 = new Float64Array(e));
              }
              "undefined" != typeof TextDecoder && new TextDecoder("utf-16le"),
                r.INITIAL_MEMORY;
              var j,
                S = [],
                C = [],
                N = [],
                x = [];
              function P() {
                if (r.preRun)
                  for (
                    "function" == typeof r.preRun && (r.preRun = [r.preRun]);
                    r.preRun.length;
  
                  )
                    I(r.preRun.shift());
                K(S);
              }
              function T() {
                K(C);
              }
              function A() {
                K(N);
              }
              function R() {
                if (r.postRun)
                  for (
                    "function" == typeof r.postRun && (r.postRun = [r.postRun]);
                    r.postRun.length;
  
                  )
                    O(r.postRun.shift());
                K(x);
              }
              function I(e) {
                S.unshift(e);
              }
              function O(e) {
                x.unshift(e);
              }
              C.push({
                func: function () {
                  ae();
                },
              });
              var M = 0,
                E = null;
              function D(e) {
                M++, r.monitorRunDependencies && r.monitorRunDependencies(M);
              }
              function G(e) {
                if (
                  (M--,
                  r.monitorRunDependencies && r.monitorRunDependencies(M),
                  0 == M && E)
                ) {
                  var t = E;
                  (E = null), t();
                }
              }
              function F(e) {
                r.onAbort && r.onAbort(e),
                  d((e += "")),
                  (f = !0),
                  (e =
                    "abort(" +
                    e +
                    "). Build with -s ASSERTIONS=1 for more info.");
                var t = new WebAssembly.RuntimeError(e);
                throw (n(t), t);
              }
              function B(e, t) {
                return String.prototype.startsWith
                  ? e.startsWith(t)
                  : 0 === e.indexOf(t);
              }
              (r.preloadedImages = {}), (r.preloadedAudios = {});
              var W = "data:application/octet-stream;base64,";
              function U(e) {
                return B(e, W);
              }
              var $,
                q = "onig.wasm";
              function z(e) {
                try {
                  if (e == q && l) return new Uint8Array(l);
                  if (o) return o(e);
                  throw "both async and sync fetching of the wasm failed";
                } catch (e) {
                  F(e);
                }
              }
              function H() {
                return l || !i || "function" != typeof fetch
                  ? Promise.resolve().then(function () {
                      return z(q);
                    })
                  : fetch(q, { credentials: "same-origin" })
                      .then(function (e) {
                        if (!e.ok)
                          throw "failed to load wasm binary file at '" + q + "'";
                        return e.arrayBuffer();
                      })
                      .catch(function () {
                        return z(q);
                      });
              }
              function V() {
                var e = { env: re, wasi_snapshot_preview1: re };
                function t(e, t) {
                  var n = e.exports;
                  (r.asm = n),
                    w((p = r.asm.memory).buffer),
                    (j = r.asm.__indirect_function_table),
                    G();
                }
                function a(e) {
                  t(e.instance);
                }
                function s(t) {
                  return H()
                    .then(function (t) {
                      return WebAssembly.instantiate(t, e);
                    })
                    .then(t, function (e) {
                      d("failed to asynchronously prepare wasm: " + e), F(e);
                    });
                }
                if ((D(), r.instantiateWasm))
                  try {
                    return r.instantiateWasm(e, t);
                  } catch (e) {
                    return (
                      d(
                        "Module.instantiateWasm callback failed with error: " + e
                      ),
                      !1
                    );
                  }
                return (
                  (l ||
                  "function" != typeof WebAssembly.instantiateStreaming ||
                  U(q) ||
                  "function" != typeof fetch
                    ? s(a)
                    : fetch(q, { credentials: "same-origin" }).then(function (t) {
                        return WebAssembly.instantiateStreaming(t, e).then(
                          a,
                          function (e) {
                            return (
                              d("wasm streaming compile failed: " + e),
                              d("falling back to ArrayBuffer instantiation"),
                              s(a)
                            );
                          }
                        );
                      })
                  ).catch(n),
                  {}
                );
              }
              function K(e) {
                for (; e.length > 0; ) {
                  var t = e.shift();
                  if ("function" != typeof t) {
                    var n = t.func;
                    "number" == typeof n
                      ? void 0 === t.arg
                        ? j.get(n)()
                        : j.get(n)(t.arg)
                      : n(void 0 === t.arg ? null : t.arg);
                  } else t(r);
                }
              }
              function X(e, t, n) {
                _.copyWithin(e, t, t + n);
              }
              function Y() {
                return _.length;
              }
              function J(e) {
                try {
                  return (
                    p.grow((e - m.byteLength + 65535) >>> 16), w(p.buffer), 1
                  );
                } catch (e) {}
              }
              function Q(e) {
                var t = Y(),
                  n = 2147483648;
                if (e > n) return !1;
                for (var r = 1; r <= 4; r *= 2) {
                  var a = t * (1 + 0.2 / r);
                  if (
                    ((a = Math.min(a, e + 100663296)),
                    J(Math.min(n, L(Math.max(e, a), 65536))))
                  )
                    return !0;
                }
                return !1;
              }
              U(q) || (q = u(q)),
                ($ =
                  "undefined" != typeof dateNow
                    ? dateNow
                    : function () {
                        return performance.now();
                      });
              var Z = {
                mappings: {},
                buffers: [null, [], []],
                printChar: function (e, t) {
                  var n = Z.buffers[e];
                  0 === t || 10 === t
                    ? ((1 === e ? h : d)(b(n, 0)), (n.length = 0))
                    : n.push(t);
                },
                varargs: void 0,
                get: function () {
                  return (Z.varargs += 4), y[(Z.varargs - 4) >> 2];
                },
                getStr: function (e) {
                  return k(e);
                },
                get64: function (e, t) {
                  return e;
                },
              };
              function ee(e, t, n, r) {
                for (var a = 0, s = 0; s < n; s++) {
                  for (
                    var o = y[(t + 8 * s) >> 2],
                      i = y[(t + (8 * s + 4)) >> 2],
                      c = 0;
                    c < i;
                    c++
                  )
                    Z.printChar(e, _[o + c]);
                  a += i;
                }
                return (y[r >> 2] = a), 0;
              }
              function te(e) {}
              var ne,
                re = {
                  emscripten_get_now: $,
                  emscripten_memcpy_big: X,
                  emscripten_resize_heap: Q,
                  fd_write: ee,
                  setTempRet0: te,
                },
                ae =
                  (V(),
                  (r.___wasm_call_ctors = function () {
                    return (ae = r.___wasm_call_ctors =
                      r.asm.__wasm_call_ctors).apply(null, arguments);
                  }));
              function se(e) {
                function n() {
                  ne ||
                    ((ne = !0),
                    (r.calledRun = !0),
                    f ||
                      (T(),
                      A(),
                      t(r),
                      r.onRuntimeInitialized && r.onRuntimeInitialized(),
                      R()));
                }
                M > 0 ||
                  (P(),
                  M > 0 ||
                    (r.setStatus
                      ? (r.setStatus("Running..."),
                        setTimeout(function () {
                          setTimeout(function () {
                            r.setStatus("");
                          }, 1),
                            n();
                        }, 1))
                      : n()));
              }
              if (
                ((r.___errno_location = function () {
                  return (r.___errno_location = r.asm.__errno_location).apply(
                    null,
                    arguments
                  );
                }),
                (r._omalloc = function () {
                  return (r._omalloc = r.asm.omalloc).apply(null, arguments);
                }),
                (r._ofree = function () {
                  return (r._ofree = r.asm.ofree).apply(null, arguments);
                }),
                (r._getLastOnigError = function () {
                  return (r._getLastOnigError = r.asm.getLastOnigError).apply(
                    null,
                    arguments
                  );
                }),
                (r._createOnigScanner = function () {
                  return (r._createOnigScanner = r.asm.createOnigScanner).apply(
                    null,
                    arguments
                  );
                }),
                (r._freeOnigScanner = function () {
                  return (r._freeOnigScanner = r.asm.freeOnigScanner).apply(
                    null,
                    arguments
                  );
                }),
                (r._findNextOnigScannerMatch = function () {
                  return (r._findNextOnigScannerMatch =
                    r.asm.findNextOnigScannerMatch).apply(null, arguments);
                }),
                (r._findNextOnigScannerMatchDbg = function () {
                  return (r._findNextOnigScannerMatchDbg =
                    r.asm.findNextOnigScannerMatchDbg).apply(null, arguments);
                }),
                (r.stackSave = function () {
                  return (r.stackSave = r.asm.stackSave).apply(null, arguments);
                }),
                (r.stackRestore = function () {
                  return (r.stackRestore = r.asm.stackRestore).apply(
                    null,
                    arguments
                  );
                }),
                (r.stackAlloc = function () {
                  return (r.stackAlloc = r.asm.stackAlloc).apply(null, arguments);
                }),
                (r.dynCall_jiji = function () {
                  return (r.dynCall_jiji = r.asm.dynCall_jiji).apply(
                    null,
                    arguments
                  );
                }),
                (r.UTF8ToString = k),
                (E = function e() {
                  ne || se(), ne || (E = e);
                }),
                (r.run = se),
                r.preInit)
              )
                for (
                  "function" == typeof r.preInit && (r.preInit = [r.preInit]);
                  r.preInit.length > 0;
  
                )
                  r.preInit.pop()();
              return se(), e.ready;
            });
          e.exports = t;
        },
      }),
      (i = {}),
      (function e(t) {
        var n = i[t];
        if (void 0 !== n) return n.exports;
        var r = (i[t] = { exports: {} });
        return o[t].call(r.exports, r, r.exports, e), r.exports;
      })(770))),
      (function (e) {
        e.DEFAULT = { allowTrailingComma: !1 };
      })(c || (c = {}));
    var f = function (e, t, n) {
      void 0 === t && (t = []), void 0 === n && (n = c.DEFAULT);
      var r = null,
        a = [],
        s = [];
      function o(e) {
        Array.isArray(a) ? a.push(e) : null !== r && (a[r] = e);
      }
      return (
        (function (e, t, n) {
          void 0 === n && (n = c.DEFAULT);
          var r = l(e, !1);
          function a(e) {
            return e
              ? function () {
                  return e(
                    r.getTokenOffset(),
                    r.getTokenLength(),
                    r.getTokenStartLine(),
                    r.getTokenStartCharacter()
                  );
                }
              : function () {
                  return !0;
                };
          }
          function s(e) {
            return e
              ? function (t) {
                  return e(
                    t,
                    r.getTokenOffset(),
                    r.getTokenLength(),
                    r.getTokenStartLine(),
                    r.getTokenStartCharacter()
                  );
                }
              : function () {
                  return !0;
                };
          }
          var o = a(t.onObjectBegin),
            i = s(t.onObjectProperty),
            u = a(t.onObjectEnd),
            p = a(t.onArrayBegin),
            h = a(t.onArrayEnd),
            d = s(t.onLiteralValue),
            f = s(t.onSeparator),
            g = a(t.onComment),
            m = s(t.onError),
            _ = n && n.disallowComments,
            y = n && n.allowTrailingComma;
          function v() {
            for (;;) {
              var e = r.scan();
              switch (r.getTokenError()) {
                case 4:
                  b(14);
                  break;
                case 5:
                  b(15);
                  break;
                case 3:
                  b(13);
                  break;
                case 1:
                  _ || b(11);
                  break;
                case 2:
                  b(12);
                  break;
                case 6:
                  b(16);
              }
              switch (e) {
                case 12:
                case 13:
                  _ ? b(10) : g();
                  break;
                case 16:
                  b(1);
                  break;
                case 15:
                case 14:
                  break;
                default:
                  return e;
              }
            }
          }
          function b(e, t, n) {
            if (
              (void 0 === t && (t = []),
              void 0 === n && (n = []),
              m(e),
              t.length + n.length > 0)
            )
              for (var a = r.getToken(); 17 !== a; ) {
                if (-1 !== t.indexOf(a)) {
                  v();
                  break;
                }
                if (-1 !== n.indexOf(a)) break;
                a = v();
              }
          }
          function k(e) {
            var t = r.getTokenValue();
            return e ? d(t) : i(t), v(), !0;
          }
          function L() {
            switch (r.getToken()) {
              case 11:
                var e = r.getTokenValue(),
                  t = Number(e);
                isNaN(t) && (b(2), (t = 0)), d(t);
                break;
              case 7:
                d(null);
                break;
              case 8:
                d(!0);
                break;
              case 9:
                d(!1);
                break;
              default:
                return !1;
            }
            return v(), !0;
          }
          function w() {
            return 10 !== r.getToken()
              ? (b(3, [], [2, 5]), !1)
              : (k(!1),
                6 === r.getToken()
                  ? (f(":"), v(), C() || b(4, [], [2, 5]))
                  : b(5, [], [2, 5]),
                !0);
          }
          function j() {
            o(), v();
            for (var e = !1; 2 !== r.getToken() && 17 !== r.getToken(); ) {
              if (5 === r.getToken()) {
                if ((e || b(4, [], []), f(","), v(), 2 === r.getToken() && y))
                  break;
              } else e && b(6, [], []);
              w() || b(4, [], [2, 5]), (e = !0);
            }
            return u(), 2 !== r.getToken() ? b(7, [2], []) : v(), !0;
          }
          function S() {
            p(), v();
            for (var e = !1; 4 !== r.getToken() && 17 !== r.getToken(); ) {
              if (5 === r.getToken()) {
                if ((e || b(4, [], []), f(","), v(), 4 === r.getToken() && y))
                  break;
              } else e && b(6, [], []);
              C() || b(4, [], [4, 5]), (e = !0);
            }
            return h(), 4 !== r.getToken() ? b(8, [4], []) : v(), !0;
          }
          function C() {
            switch (r.getToken()) {
              case 3:
                return S();
              case 1:
                return j();
              case 10:
                return k(!0);
              default:
                return L();
            }
          }
          if ((v(), 17 === r.getToken()))
            return !!n.allowEmptyContent || (b(4, [], []), !1);
          if (!C()) return b(4, [], []), !1;
          17 !== r.getToken() && b(9, [], []);
        })(
          e,
          {
            onObjectBegin: function () {
              var e = {};
              o(e), s.push(a), (a = e), (r = null);
            },
            onObjectProperty: function (e) {
              r = e;
            },
            onObjectEnd: function () {
              a = s.pop();
            },
            onArrayBegin: function () {
              var e = [];
              o(e), s.push(a), (a = e), (r = null);
            },
            onArrayEnd: function () {
              a = s.pop();
            },
            onLiteralValue: o,
            onError: function (e, n, r) {
              t.push({ error: e, offset: n, length: r });
            },
          },
          n
        ),
        a[0]
      );
    };
    const g =
      ("undefined" != typeof self && void 0 !== self.WorkerGlobalScope) ||
      ("undefined" != typeof window &&
        void 0 !== window.document &&
        "undefined" != typeof fetch);
    let m = "https://unpkg.com/shiki@0.10.1/",
      _ = "";
    function y(e) {
      _ = e;
    }
    let v = null;
    function b(e) {
      if (g)
        return (
          m ||
            console.warn(
              "[Shiki] no CDN provider found, use `setCDN()` to specify the CDN for loading the resources before calling `getHighlighter()`"
            ),
          `${m}${e}`
        );
      {
        const t = require("path");
        return t.isAbsolute(e) ? e : t.resolve(__dirname, "..", e);
      }
    }
    async function k(e) {
      const t = [],
        n = f(
          await (async function (e) {
            const t = b(e);
            if (g) return await fetch(t).then((e) => e.text());
            {
              const e = require("fs");
              return await e.promises.readFile(t, "utf-8");
            }
          })(e),
          t,
          { allowTrailingComma: !0 }
        );
      if (t.length) throw t[0];
      return n;
    }
    async function L(e) {
      const t = w(await k(e));
      if (t.include) {
        const n = await L(
          (function (...e) {
            return e.map(a).map(s).join("/");
          })(
            (function (e) {
              const t = e.split(/[\/\\]/g);
              return t[t.length - 2];
            })(e),
            t.include
          )
        );
        n.settings && (t.settings = n.settings.concat(t.settings)),
          n.bg && !t.bg && (t.bg = n.bg),
          n.colors &&
            (t.colors = Object.assign(Object.assign({}, n.colors), t.colors)),
          delete t.include;
      }
      return t;
    }
    function w(e) {
      const t = e.type || "dark",
        n = Object.assign(
          Object.assign({ name: e.name, type: t }, e),
          (function (e) {
            var t, n, r, a, s, o;
            let i,
              c,
              u = e.settings ? e.settings : e.tokenColors;
            const l = u ? u.find((e) => !e.name && !e.scope) : void 0;
            (null === (t = null == l ? void 0 : l.settings) || void 0 === t
              ? void 0
              : t.foreground) && (i = l.settings.foreground);
            (null === (n = null == l ? void 0 : l.settings) || void 0 === n
              ? void 0
              : n.background) && (c = l.settings.background);
            !i &&
              (null ===
                (a = null === (r = e) || void 0 === r ? void 0 : r.colors) ||
              void 0 === a
                ? void 0
                : a["editor.foreground"]) &&
              (i = e.colors["editor.foreground"]);
            !c &&
              (null ===
                (o = null === (s = e) || void 0 === s ? void 0 : s.colors) ||
              void 0 === o
                ? void 0
                : o["editor.background"]) &&
              (c = e.colors["editor.background"]);
            i || (i = "light" === e.type ? j : S);
            c || (c = "light" === e.type ? C : N);
            return { fg: i, bg: c };
          })(e)
        );
      var r;
      return (
        e.include && (n.include = e.include),
        e.tokenColors && ((n.settings = e.tokenColors), delete n.tokenColors),
        (r = n).settings || (r.settings = []),
        (r.settings[0] && r.settings[0].settings && !r.settings[0].scope) ||
          r.settings.unshift({
            settings: { foreground: r.fg, background: r.bg },
          }),
        n
      );
    }
    const j = "#333333",
      S = "#bbbbbb",
      C = "#fffffe",
      N = "#1e1e1e";
    class x {
      constructor(e, t) {
        (this.languagesPath = "languages/"),
          (this.languageMap = {}),
          (this.scopeToLangMap = {}),
          (this._onigLibPromise = e),
          (this._onigLibName = t);
      }
      get onigLib() {
        return this._onigLibPromise;
      }
      getOnigLibName() {
        return this._onigLibName;
      }
      getLangRegistration(e) {
        return this.languageMap[e];
      }
      async loadGrammar(e) {
        const n = this.scopeToLangMap[e];
        if (!n) return null;
        if (n.grammar) return n.grammar;
        const r = await (async function (e) {
          return await k(e);
        })(t.includes(n) ? `${this.languagesPath}${n.path}` : n.path);
        return (n.grammar = r), r;
      }
      addLanguage(e) {
        (this.languageMap[e.id] = e),
          e.aliases &&
            e.aliases.forEach((t) => {
              this.languageMap[t] = e;
            }),
          (this.scopeToLangMap[e.scopeName] = e);
      }
    }
    var P = { exports: {} };
    function T(e, t) {
      let n = [];
      for (let r = 0, a = t.length; r < a; r++) {
        let a = t.slice(0, r),
          s = t[r];
        n[r] = { scopeName: s, themeMatches: I(e, s, a) };
      }
      return n;
    }
    function A(e, t) {
      let n = e + ".";
      return e === t || t.substring(0, n.length) === n;
    }
    function R(e, t, n, r) {
      if (!A(e, n)) return !1;
      let a = t.length - 1,
        s = r.length - 1;
      for (; a >= 0 && s >= 0; ) A(t[a], r[s]) && a--, s--;
      return -1 === a;
    }
    function I(e, t, n) {
      let r = [],
        a = 0;
      for (let s = 0, o = e.settings.length; s < o; s++) {
        let o,
          i = e.settings[s];
        if ("string" == typeof i.scope)
          o = i.scope.split(/,/).map((e) => e.trim());
        else {
          if (!Array.isArray(i.scope)) continue;
          o = i.scope;
        }
        for (let e = 0, s = o.length; e < s; e++) {
          let c = o[e].split(/ /);
          R(c[c.length - 1], c.slice(0, c.length - 1), t, n) &&
            ((r[a++] = i), (e = s));
        }
      }
      return r;
    }
    function O(t, n = {}) {
      var r;
      const a = n.bg || "#fff",
        s = (function (e, t) {
          const n = new Map();
          for (const r of e) {
            const e = t(r);
            n.has(e) ? n.get(e).push(r) : n.set(e, [r]);
          }
          return n;
        })(null !== (r = n.lineOptions) && void 0 !== r ? r : [], (e) => e.line);
      let o = "";
      return (
        (o += `<pre class="shiki" style="background-color: ${a}">`),
        n.langId && (o += `<div class="language-id">${n.langId}</div>`),
        (o += "<code>"),
        t.forEach((t, r) => {
          var a;
          const i = r + 1,
            c = (function (e) {
              var t;
              const n = new Set(["line"]);
              for (const r of e)
                for (const e of null !== (t = r.classes) && void 0 !== t ? t : [])
                  n.add(e);
              return Array.from(n);
            })(null !== (a = s.get(i)) && void 0 !== a ? a : []).join(" ");
          (o += `<span class="${c}">`),
            t.forEach((t) => {
              const r = [`color: ${t.color || n.fg}`];
              t.fontStyle & e.FontStyle.Italic && r.push("font-style: italic"),
                t.fontStyle & e.FontStyle.Bold && r.push("font-weight: bold"),
                t.fontStyle & e.FontStyle.Underline &&
                  r.push("text-decoration: underline"),
                (o += `<span style="${r.join("; ")}">${(function (e) {
                  return e.replace(/[&<>"']/g, (e) => M[e]);
                })(t.content)}</span>`);
            }),
            (o += "</span>\n");
        }),
        (o = o.replace(/\n*$/, "")),
        (o += "</code></pre>"),
        o
      );
    }
    !(function (e, t) {
      e.exports = (function (e) {
        var t = {};
        function n(r) {
          if (t[r]) return t[r].exports;
          var a = (t[r] = { i: r, l: !1, exports: {} });
          return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
        }
        return (
          (n.m = e),
          (n.c = t),
          (n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
          }),
          (n.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
              (n.r(r),
              Object.defineProperty(r, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var a in e)
                n.d(
                  r,
                  a,
                  function (t) {
                    return e[t];
                  }.bind(null, a)
                );
            return r;
          }),
          (n.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return n.d(t, "a", t), t;
          }),
          (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = ""),
          n((n.s = 3))
        );
      })([
        function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = n(1),
            a = n(5),
            s = n(6),
            o = n(2),
            i =
              "undefined" == typeof performance
                ? function () {
                    return Date.now();
                  }
                : function () {
                    return performance.now();
                  };
          t.createGrammar = function (e, t, n, r, a, s) {
            return new v(e, t, n, r, a, s);
          };
          var c = function (e) {
            this.scopeName = e;
          };
          t.FullScopeDependency = c;
          var u = (function () {
            function e(e, t) {
              (this.scopeName = e), (this.include = t);
            }
            return (
              (e.prototype.toKey = function () {
                return this.scopeName + "#" + this.include;
              }),
              e
            );
          })();
          t.PartialScopeDependency = u;
          var l = (function () {
            function e() {
              (this.full = []),
                (this.partial = []),
                (this.visitedRule = new Set()),
                (this._seenFull = new Set()),
                (this._seenPartial = new Set());
            }
            return (
              (e.prototype.add = function (e) {
                e instanceof c
                  ? this._seenFull.has(e.scopeName) ||
                    (this._seenFull.add(e.scopeName), this.full.push(e))
                  : this._seenPartial.has(e.toKey()) ||
                    (this._seenPartial.add(e.toKey()), this.partial.push(e));
              }),
              e
            );
          })();
          function p(e, t, n, a, s) {
            for (var o = 0, i = a; o < i.length; o++) {
              var l = i[o];
              if (!e.visitedRule.has(l)) {
                e.visitedRule.add(l);
                var f = l.repository ? r.mergeObjects({}, s, l.repository) : s;
                Array.isArray(l.patterns) && p(e, t, n, l.patterns, f);
                var g = l.include;
                if (g)
                  if ("$base" === g || g === t.scopeName) d(e, t, t);
                  else if ("$self" === g || g === n.scopeName) d(e, t, n);
                  else if ("#" === g.charAt(0)) h(e, t, n, g.substring(1), f);
                  else {
                    var m = g.indexOf("#");
                    if (m >= 0) {
                      var _ = g.substring(0, m),
                        y = g.substring(m + 1);
                      _ === t.scopeName
                        ? h(e, t, t, y, f)
                        : _ === n.scopeName
                        ? h(e, t, n, y, f)
                        : e.add(new u(_, g.substring(m + 1)));
                    } else e.add(new c(g));
                  }
              }
            }
          }
          function h(e, t, n, r, a) {
            void 0 === a && (a = n.repository),
              a && a[r] && p(e, t, n, [a[r]], a);
          }
          function d(e, t, n) {
            if (
              (n.patterns &&
                Array.isArray(n.patterns) &&
                p(e, t, n, n.patterns, n.repository),
              n.injections)
            ) {
              var r = [];
              for (var a in n.injections) r.push(n.injections[a]);
              p(e, t, n, r, n.repository);
            }
          }
          function f(e, t) {
            if (!e) return !1;
            if (e === t) return !0;
            var n = t.length;
            return e.length > n && e.substr(0, n) === t && "." === e[n];
          }
          function g(e, t) {
            if (t.length < e.length) return !1;
            var n = 0;
            return e.every(function (e) {
              for (var r = n; r < t.length; r++)
                if (f(t[r], e)) return (n = r + 1), !0;
              return !1;
            });
          }
          function m(e, t, n, r, o) {
            for (
              var i = s.createMatchers(t, g),
                c = a.RuleFactory.getCompiledRuleId(n, r, o.repository),
                u = 0,
                l = i;
              u < l.length;
              u++
            ) {
              var p = l[u];
              e.push({
                matcher: p.matcher,
                ruleId: c,
                grammar: o,
                priority: p.priority,
              });
            }
          }
          (t.ScopeDependencyCollector = l),
            (t.collectSpecificDependencies = h),
            (t.collectDependencies = d);
          var _ = function (e, t, n, r) {
            (this.scopeName = e),
              (this.languageId = t),
              (this.tokenType = n),
              (this.themeData = r);
          };
          t.ScopeMetadata = _;
          var y = (function () {
              function e(t, n, r) {
                if (
                  ((this._initialLanguage = t),
                  (this._themeProvider = n),
                  (this._cache = new Map()),
                  (this._defaultMetaData = new _("", this._initialLanguage, 0, [
                    this._themeProvider.getDefaults(),
                  ])),
                  (this._embeddedLanguages = Object.create(null)),
                  r)
                )
                  for (var a = Object.keys(r), s = 0, o = a.length; s < o; s++) {
                    var i = a[s],
                      c = r[i];
                    "number" == typeof c && 0 !== c
                      ? (this._embeddedLanguages[i] = c)
                      : console.warn(
                          "Invalid embedded language found at scope " +
                            i +
                            ": <<" +
                            c +
                            ">>"
                        );
                  }
                var u = Object.keys(this._embeddedLanguages).map(function (t) {
                  return e._escapeRegExpCharacters(t);
                });
                0 === u.length
                  ? (this._embeddedLanguagesRegex = null)
                  : (u.sort(),
                    u.reverse(),
                    (this._embeddedLanguagesRegex = new RegExp(
                      "^((" + u.join(")|(") + "))($|\\.)",
                      ""
                    )));
              }
              return (
                (e.prototype.onDidChangeTheme = function () {
                  (this._cache = new Map()),
                    (this._defaultMetaData = new _("", this._initialLanguage, 0, [
                      this._themeProvider.getDefaults(),
                    ]));
                }),
                (e.prototype.getDefaultMetadata = function () {
                  return this._defaultMetaData;
                }),
                (e._escapeRegExpCharacters = function (e) {
                  return e.replace(
                    /[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,
                    "\\$&"
                  );
                }),
                (e.prototype.getMetadataForScope = function (t) {
                  if (null === t) return e._NULL_SCOPE_METADATA;
                  var n = this._cache.get(t);
                  return (
                    n ||
                    ((n = this._doGetMetadataForScope(t)),
                    this._cache.set(t, n),
                    n)
                  );
                }),
                (e.prototype._doGetMetadataForScope = function (e) {
                  var t = this._scopeToLanguage(e),
                    n = this._toStandardTokenType(e),
                    r = this._themeProvider.themeMatch(e);
                  return new _(e, t, n, r);
                }),
                (e.prototype._scopeToLanguage = function (e) {
                  if (!e) return 0;
                  if (!this._embeddedLanguagesRegex) return 0;
                  var t = e.match(this._embeddedLanguagesRegex);
                  return (t && (this._embeddedLanguages[t[1]] || 0)) || 0;
                }),
                (e.prototype._toStandardTokenType = function (t) {
                  var n = t.match(e.STANDARD_TOKEN_TYPE_REGEXP);
                  if (!n) return 0;
                  switch (n[1]) {
                    case "comment":
                      return 1;
                    case "string":
                      return 2;
                    case "regex":
                      return 4;
                    case "meta.embedded":
                      return 8;
                  }
                  throw new Error("Unexpected match for standard token type!");
                }),
                (e._NULL_SCOPE_METADATA = new _("", 0, 0, null)),
                (e.STANDARD_TOKEN_TYPE_REGEXP =
                  /\b(comment|string|regex|meta\.embedded)\b/),
                e
              );
            })(),
            v = (function () {
              function e(e, t, n, r, a, o) {
                if (
                  ((this._scopeMetadataProvider = new y(t, a, n)),
                  (this._onigLib = o),
                  (this._rootId = -1),
                  (this._lastRuleId = 0),
                  (this._ruleId2desc = [null]),
                  (this._includedGrammars = {}),
                  (this._grammarRepository = a),
                  (this._grammar = k(e, null)),
                  (this._injections = null),
                  (this._tokenTypeMatchers = []),
                  r)
                )
                  for (var i = 0, c = Object.keys(r); i < c.length; i++)
                    for (
                      var u = c[i], l = 0, p = s.createMatchers(u, g);
                      l < p.length;
                      l++
                    ) {
                      var h = p[l];
                      this._tokenTypeMatchers.push({
                        matcher: h.matcher,
                        type: r[u],
                      });
                    }
              }
              return (
                (e.prototype.dispose = function () {
                  for (var e = 0, t = this._ruleId2desc; e < t.length; e++) {
                    var n = t[e];
                    n && n.dispose();
                  }
                }),
                (e.prototype.createOnigScanner = function (e) {
                  return this._onigLib.createOnigScanner(e);
                }),
                (e.prototype.createOnigString = function (e) {
                  return this._onigLib.createOnigString(e);
                }),
                (e.prototype.onDidChangeTheme = function () {
                  this._scopeMetadataProvider.onDidChangeTheme();
                }),
                (e.prototype.getMetadataForScope = function (e) {
                  return this._scopeMetadataProvider.getMetadataForScope(e);
                }),
                (e.prototype.getInjections = function () {
                  var e = this;
                  if (null === this._injections) {
                    this._injections = [];
                    var t = this._grammar.injections;
                    if (t)
                      for (var n in t)
                        m(this._injections, n, t[n], this, this._grammar);
                    if (this._grammarRepository) {
                      var r = this._grammarRepository.injections(
                        this._grammar.scopeName
                      );
                      r &&
                        r.forEach(function (t) {
                          var n = e.getExternalGrammar(t);
                          if (n) {
                            var r = n.injectionSelector;
                            r && m(e._injections, r, n, e, n);
                          }
                        });
                    }
                    this._injections.sort(function (e, t) {
                      return e.priority - t.priority;
                    });
                  }
                  return this._injections;
                }),
                (e.prototype.registerRule = function (e) {
                  var t = ++this._lastRuleId,
                    n = e(t);
                  return (this._ruleId2desc[t] = n), n;
                }),
                (e.prototype.getRule = function (e) {
                  return this._ruleId2desc[e];
                }),
                (e.prototype.getExternalGrammar = function (e, t) {
                  if (this._includedGrammars[e]) return this._includedGrammars[e];
                  if (this._grammarRepository) {
                    var n = this._grammarRepository.lookup(e);
                    if (n)
                      return (
                        (this._includedGrammars[e] = k(n, t && t.$base)),
                        this._includedGrammars[e]
                      );
                  }
                  return null;
                }),
                (e.prototype.tokenizeLine = function (e, t) {
                  var n = this._tokenize(e, t, !1);
                  return {
                    tokens: n.lineTokens.getResult(n.ruleStack, n.lineLength),
                    ruleStack: n.ruleStack,
                  };
                }),
                (e.prototype.tokenizeLine2 = function (e, t) {
                  var n = this._tokenize(e, t, !0);
                  return {
                    tokens: n.lineTokens.getBinaryResult(
                      n.ruleStack,
                      n.lineLength
                    ),
                    ruleStack: n.ruleStack,
                  };
                }),
                (e.prototype._tokenize = function (e, t, n) {
                  var r;
                  if (
                    (-1 === this._rootId &&
                      (this._rootId = a.RuleFactory.getCompiledRuleId(
                        this._grammar.repository.$self,
                        this,
                        this._grammar.repository
                      )),
                    t && t !== x.NULL)
                  )
                    (r = !1), t.reset();
                  else {
                    r = !0;
                    var s = this._scopeMetadataProvider.getDefaultMetadata(),
                      o = s.themeData[0],
                      i = C.set(
                        0,
                        s.languageId,
                        s.tokenType,
                        o.fontStyle,
                        o.foreground,
                        o.background
                      ),
                      c = this.getRule(this._rootId).getName(null, null),
                      u = this._scopeMetadataProvider.getMetadataForScope(c),
                      l = N.mergeMetadata(i, null, u),
                      p = new N(null, null === c ? "unknown" : c, l);
                    t = new x(null, this._rootId, -1, -1, !1, null, p, p);
                  }
                  e += "\n";
                  var h = this.createOnigString(e),
                    d = h.content.length,
                    f = new T(n, e, this._tokenTypeMatchers),
                    g = S(this, h, r, 0, t, f, !0);
                  return b(h), { lineLength: d, lineTokens: f, ruleStack: g };
                }),
                e
              );
            })();
          function b(e) {
            "function" == typeof e.dispose && e.dispose();
          }
          function k(e, t) {
            return (
              ((e = r.clone(e)).repository = e.repository || {}),
              (e.repository.$self = {
                $vscodeTextmateLocation: e.$vscodeTextmateLocation,
                patterns: e.patterns,
                name: e.scopeName,
              }),
              (e.repository.$base = t || e.repository.$self),
              e
            );
          }
          function L(e, t, n, r, a, s, o) {
            if (0 !== s.length) {
              for (
                var i = t.content,
                  c = Math.min(s.length, o.length),
                  u = [],
                  l = o[0].end,
                  p = 0;
                p < c;
                p++
              ) {
                var h = s[p];
                if (null !== h) {
                  var d = o[p];
                  if (0 !== d.length) {
                    if (d.start > l) break;
                    for (; u.length > 0 && u[u.length - 1].endPos <= d.start; )
                      a.produceFromScopes(
                        u[u.length - 1].scopes,
                        u[u.length - 1].endPos
                      ),
                        u.pop();
                    if (
                      (u.length > 0
                        ? a.produceFromScopes(u[u.length - 1].scopes, d.start)
                        : a.produce(r, d.start),
                      h.retokenizeCapturedWithRuleId)
                    ) {
                      var f = h.getName(i, o),
                        g = r.contentNameScopesList.push(e, f),
                        m = h.getContentName(i, o),
                        _ = g.push(e, m),
                        y = r.push(
                          h.retokenizeCapturedWithRuleId,
                          d.start,
                          -1,
                          !1,
                          null,
                          g,
                          _
                        ),
                        v = e.createOnigString(i.substring(0, d.end));
                      S(e, v, n && 0 === d.start, d.start, y, a, !1), b(v);
                    } else {
                      var k = h.getName(i, o);
                      if (null !== k) {
                        var L = (
                          u.length > 0
                            ? u[u.length - 1].scopes
                            : r.contentNameScopesList
                        ).push(e, k);
                        u.push(new P(L, d.end));
                      }
                    }
                  }
                }
              }
              for (; u.length > 0; )
                a.produceFromScopes(
                  u[u.length - 1].scopes,
                  u[u.length - 1].endPos
                ),
                  u.pop();
            }
          }
          function w(e) {
            for (var t = [], n = 0, r = e.rules.length; n < r; n++)
              t.push("   - " + e.rules[n] + ": " + e.debugRegExps[n]);
            return t.join("\n");
          }
          function j(e, t, n, r, a, s) {
            var c = (function (e, t, n, r, a, s) {
                var c = a.getRule(e),
                  u = c.compile(e, a.endRule, n, r === s),
                  l = 0;
                o.DebugFlags.InDebugMode && (l = i());
                var p = u.scanner.findNextMatchSync(t, r);
                if (o.DebugFlags.InDebugMode) {
                  var h = i() - l;
                  h > 5 &&
                    console.warn(
                      "Rule " +
                        c.debugName +
                        " (" +
                        c.id +
                        ") matching took " +
                        h +
                        " against '" +
                        t +
                        "'"
                    ),
                    p &&
                      console.log(
                        "matched rule id: " +
                          u.rules[p.index] +
                          " from " +
                          p.captureIndices[0].start +
                          " to " +
                          p.captureIndices[0].end
                      );
                }
                return p
                  ? {
                      captureIndices: p.captureIndices,
                      matchedRuleId: u.rules[p.index],
                    }
                  : null;
              })(e, t, n, r, a, s),
              u = e.getInjections();
            if (0 === u.length) return c;
            var l = (function (e, t, n, r, a, s, i) {
              for (
                var c,
                  u = Number.MAX_VALUE,
                  l = null,
                  p = 0,
                  h = s.contentNameScopesList.generateScopes(),
                  d = 0,
                  f = e.length;
                d < f;
                d++
              ) {
                var g = e[d];
                if (g.matcher(h)) {
                  var m = t.getRule(g.ruleId).compile(t, null, r, a === i),
                    _ = m.scanner.findNextMatchSync(n, a);
                  if (
                    (o.DebugFlags.InDebugMode &&
                      (console.log("  scanning for injections"),
                      console.log(w(m))),
                    _)
                  ) {
                    var y = _.captureIndices[0].start;
                    if (
                      !(y >= u) &&
                      ((u = y),
                      (l = _.captureIndices),
                      (c = m.rules[_.index]),
                      (p = g.priority),
                      u === a)
                    )
                      break;
                  }
                }
              }
              return l
                ? { priorityMatch: -1 === p, captureIndices: l, matchedRuleId: c }
                : null;
            })(u, e, t, n, r, a, s);
            if (!l) return c;
            if (!c) return l;
            var p = c.captureIndices[0].start,
              h = l.captureIndices[0].start;
            return h < p || (l.priorityMatch && h === p) ? l : c;
          }
          function S(e, t, n, r, s, i, c) {
            var u = t.content.length,
              l = !1,
              p = -1;
            if (c) {
              var h = (function (e, t, n, r, s, i) {
                for (
                  var c = s.beginRuleCapturedEOL ? 0 : -1, u = [], l = s;
                  l;
                  l = l.pop()
                ) {
                  var p = l.getRule(e);
                  p instanceof a.BeginWhileRule && u.push({ rule: p, stack: l });
                }
                for (var h = u.pop(); h; h = u.pop()) {
                  var d = h.rule.compileWhile(e, h.stack.endRule, n, c === r),
                    f = d.scanner.findNextMatchSync(t, r);
                  if (
                    (o.DebugFlags.InDebugMode &&
                      (console.log("  scanning for while rule"),
                      console.log(w(d))),
                    !f)
                  ) {
                    o.DebugFlags.InDebugMode &&
                      console.log(
                        "  popping " +
                          h.rule.debugName +
                          " - " +
                          h.rule.debugWhileRegExp
                      ),
                      (s = h.stack.pop());
                    break;
                  }
                  if (-2 !== d.rules[f.index]) {
                    s = h.stack.pop();
                    break;
                  }
                  f.captureIndices &&
                    f.captureIndices.length &&
                    (i.produce(h.stack, f.captureIndices[0].start),
                    L(
                      e,
                      t,
                      n,
                      h.stack,
                      i,
                      h.rule.whileCaptures,
                      f.captureIndices
                    ),
                    i.produce(h.stack, f.captureIndices[0].end),
                    (c = f.captureIndices[0].end),
                    f.captureIndices[0].end > r &&
                      ((r = f.captureIndices[0].end), (n = !1)));
                }
                return {
                  stack: s,
                  linePos: r,
                  anchorPosition: c,
                  isFirstLine: n,
                };
              })(e, t, n, r, s, i);
              (s = h.stack),
                (r = h.linePos),
                (n = h.isFirstLine),
                (p = h.anchorPosition);
            }
            for (; !l; ) d();
            function d() {
              o.DebugFlags.InDebugMode &&
                (console.log(""),
                console.log(
                  "@@scanNext " +
                    r +
                    ": |" +
                    t.content.substr(r).replace(/\n$/, "\\n") +
                    "|"
                ));
              var c = j(e, t, n, r, s, p);
              if (!c)
                return (
                  o.DebugFlags.InDebugMode && console.log("  no more matches."),
                  i.produce(s, u),
                  void (l = !0)
                );
              var h = c.captureIndices,
                d = c.matchedRuleId,
                f = !!(h && h.length > 0) && h[0].end > r;
              if (-1 === d) {
                var g = s.getRule(e);
                o.DebugFlags.InDebugMode &&
                  console.log(
                    "  popping " + g.debugName + " - " + g.debugEndRegExp
                  ),
                  i.produce(s, h[0].start),
                  (s = s.setContentNameScopesList(s.nameScopesList)),
                  L(e, t, n, s, i, g.endCaptures, h),
                  i.produce(s, h[0].end);
                var m = s;
                if (
                  ((s = s.pop()),
                  (p = m.getAnchorPos()),
                  !f && m.getEnterPos() === r)
                )
                  return (
                    o.DebugFlags.InDebugMode &&
                      console.error(
                        "[1] - Grammar is in an endless loop - Grammar pushed & popped a rule without advancing"
                      ),
                    (s = m),
                    i.produce(s, u),
                    void (l = !0)
                  );
              } else {
                var _ = e.getRule(d);
                i.produce(s, h[0].start);
                var y = s,
                  v = _.getName(t.content, h),
                  b = s.contentNameScopesList.push(e, v);
                if (
                  ((s = s.push(d, r, p, h[0].end === u, null, b, b)),
                  _ instanceof a.BeginEndRule)
                ) {
                  var k = _;
                  o.DebugFlags.InDebugMode &&
                    console.log(
                      "  pushing " + k.debugName + " - " + k.debugBeginRegExp
                    ),
                    L(e, t, n, s, i, k.beginCaptures, h),
                    i.produce(s, h[0].end),
                    (p = h[0].end);
                  var w = k.getContentName(t.content, h),
                    S = b.push(e, w);
                  if (
                    ((s = s.setContentNameScopesList(S)),
                    k.endHasBackReferences &&
                      (s = s.setEndRule(
                        k.getEndWithResolvedBackReferences(t.content, h)
                      )),
                    !f && y.hasSameRuleAs(s))
                  )
                    return (
                      o.DebugFlags.InDebugMode &&
                        console.error(
                          "[2] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"
                        ),
                      (s = s.pop()),
                      i.produce(s, u),
                      void (l = !0)
                    );
                } else if (_ instanceof a.BeginWhileRule) {
                  if (
                    ((k = _),
                    o.DebugFlags.InDebugMode &&
                      console.log("  pushing " + k.debugName),
                    L(e, t, n, s, i, k.beginCaptures, h),
                    i.produce(s, h[0].end),
                    (p = h[0].end),
                    (w = k.getContentName(t.content, h)),
                    (S = b.push(e, w)),
                    (s = s.setContentNameScopesList(S)),
                    k.whileHasBackReferences &&
                      (s = s.setEndRule(
                        k.getWhileWithResolvedBackReferences(t.content, h)
                      )),
                    !f && y.hasSameRuleAs(s))
                  )
                    return (
                      o.DebugFlags.InDebugMode &&
                        console.error(
                          "[3] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"
                        ),
                      (s = s.pop()),
                      i.produce(s, u),
                      void (l = !0)
                    );
                } else {
                  var C = _;
                  if (
                    (o.DebugFlags.InDebugMode &&
                      console.log(
                        "  matched " + C.debugName + " - " + C.debugMatchRegExp
                      ),
                    L(e, t, n, s, i, C.captures, h),
                    i.produce(s, h[0].end),
                    (s = s.pop()),
                    !f)
                  )
                    return (
                      o.DebugFlags.InDebugMode &&
                        console.error(
                          "[4] - Grammar is in an endless loop - Grammar is not advancing, nor is it pushing/popping"
                        ),
                      (s = s.safePop()),
                      i.produce(s, u),
                      void (l = !0)
                    );
                }
              }
              h[0].end > r && ((r = h[0].end), (n = !1));
            }
            return s;
          }
          t.Grammar = v;
          var C = (function () {
            function e() {}
            return (
              (e.toBinaryStr = function (e) {
                for (var t = e.toString(2); t.length < 32; ) t = "0" + t;
                return t;
              }),
              (e.printMetadata = function (t) {
                var n = e.getLanguageId(t),
                  r = e.getTokenType(t),
                  a = e.getFontStyle(t),
                  s = e.getForeground(t),
                  o = e.getBackground(t);
                console.log({
                  languageId: n,
                  tokenType: r,
                  fontStyle: a,
                  foreground: s,
                  background: o,
                });
              }),
              (e.getLanguageId = function (e) {
                return (255 & e) >>> 0;
              }),
              (e.getTokenType = function (e) {
                return (1792 & e) >>> 8;
              }),
              (e.getFontStyle = function (e) {
                return (14336 & e) >>> 11;
              }),
              (e.getForeground = function (e) {
                return (8372224 & e) >>> 14;
              }),
              (e.getBackground = function (e) {
                return (4286578688 & e) >>> 23;
              }),
              (e.set = function (t, n, r, a, s, o) {
                var i = e.getLanguageId(t),
                  c = e.getTokenType(t),
                  u = e.getFontStyle(t),
                  l = e.getForeground(t),
                  p = e.getBackground(t);
                return (
                  0 !== n && (i = n),
                  0 !== r && (c = 8 === r ? 0 : r),
                  -1 !== a && (u = a),
                  0 !== s && (l = s),
                  0 !== o && (p = o),
                  ((i << 0) | (c << 8) | (u << 11) | (l << 14) | (p << 23)) >>> 0
                );
              }),
              e
            );
          })();
          t.StackElementMetadata = C;
          var N = (function () {
            function e(e, t, n) {
              (this.parent = e), (this.scope = t), (this.metadata = n);
            }
            return (
              (e._equals = function (e, t) {
                for (;;) {
                  if (e === t) return !0;
                  if (!e && !t) return !0;
                  if (!e || !t) return !1;
                  if (e.scope !== t.scope || e.metadata !== t.metadata) return !1;
                  (e = e.parent), (t = t.parent);
                }
              }),
              (e.prototype.equals = function (t) {
                return e._equals(this, t);
              }),
              (e._matchesScope = function (e, t, n) {
                return t === e || e.substring(0, n.length) === n;
              }),
              (e._matches = function (e, t) {
                if (null === t) return !0;
                for (var n = t.length, r = 0, a = t[r], s = a + "."; e; ) {
                  if (this._matchesScope(e.scope, a, s)) {
                    if (++r === n) return !0;
                    s = (a = t[r]) + ".";
                  }
                  e = e.parent;
                }
                return !1;
              }),
              (e.mergeMetadata = function (e, t, n) {
                if (null === n) return e;
                var r = -1,
                  a = 0,
                  s = 0;
                if (null !== n.themeData)
                  for (var o = 0, i = n.themeData.length; o < i; o++) {
                    var c = n.themeData[o];
                    if (this._matches(t, c.parentScopes)) {
                      (r = c.fontStyle), (a = c.foreground), (s = c.background);
                      break;
                    }
                  }
                return C.set(e, n.languageId, n.tokenType, r, a, s);
              }),
              (e._push = function (t, n, r) {
                for (var a = 0, s = r.length; a < s; a++) {
                  var o = r[a],
                    i = n.getMetadataForScope(o),
                    c = e.mergeMetadata(t.metadata, t, i);
                  t = new e(t, o, c);
                }
                return t;
              }),
              (e.prototype.push = function (t, n) {
                return null === n
                  ? this
                  : n.indexOf(" ") >= 0
                  ? e._push(this, t, n.split(/ /g))
                  : e._push(this, t, [n]);
              }),
              (e._generateScopes = function (e) {
                for (var t = [], n = 0; e; ) (t[n++] = e.scope), (e = e.parent);
                return t.reverse(), t;
              }),
              (e.prototype.generateScopes = function () {
                return e._generateScopes(this);
              }),
              e
            );
          })();
          t.ScopeListElement = N;
          var x = (function () {
            function e(e, t, n, r, a, s, o, i) {
              (this.parent = e),
                (this.depth = this.parent ? this.parent.depth + 1 : 1),
                (this.ruleId = t),
                (this._enterPos = n),
                (this._anchorPos = r),
                (this.beginRuleCapturedEOL = a),
                (this.endRule = s),
                (this.nameScopesList = o),
                (this.contentNameScopesList = i);
            }
            return (
              (e._structuralEquals = function (e, t) {
                for (;;) {
                  if (e === t) return !0;
                  if (!e && !t) return !0;
                  if (!e || !t) return !1;
                  if (
                    e.depth !== t.depth ||
                    e.ruleId !== t.ruleId ||
                    e.endRule !== t.endRule
                  )
                    return !1;
                  (e = e.parent), (t = t.parent);
                }
              }),
              (e._equals = function (e, t) {
                return (
                  e === t ||
                  (!!this._structuralEquals(e, t) &&
                    e.contentNameScopesList.equals(t.contentNameScopesList))
                );
              }),
              (e.prototype.clone = function () {
                return this;
              }),
              (e.prototype.equals = function (t) {
                return null !== t && e._equals(this, t);
              }),
              (e._reset = function (e) {
                for (; e; )
                  (e._enterPos = -1), (e._anchorPos = -1), (e = e.parent);
              }),
              (e.prototype.reset = function () {
                e._reset(this);
              }),
              (e.prototype.pop = function () {
                return this.parent;
              }),
              (e.prototype.safePop = function () {
                return this.parent ? this.parent : this;
              }),
              (e.prototype.push = function (t, n, r, a, s, o, i) {
                return new e(this, t, n, r, a, s, o, i);
              }),
              (e.prototype.getEnterPos = function () {
                return this._enterPos;
              }),
              (e.prototype.getAnchorPos = function () {
                return this._anchorPos;
              }),
              (e.prototype.getRule = function (e) {
                return e.getRule(this.ruleId);
              }),
              (e.prototype._writeString = function (e, t) {
                return (
                  this.parent && (t = this.parent._writeString(e, t)),
                  (e[t++] =
                    "(" +
                    this.ruleId +
                    ", TODO-" +
                    this.nameScopesList +
                    ", TODO-" +
                    this.contentNameScopesList +
                    ")"),
                  t
                );
              }),
              (e.prototype.toString = function () {
                var e = [];
                return this._writeString(e, 0), "[" + e.join(",") + "]";
              }),
              (e.prototype.setContentNameScopesList = function (e) {
                return this.contentNameScopesList === e
                  ? this
                  : this.parent.push(
                      this.ruleId,
                      this._enterPos,
                      this._anchorPos,
                      this.beginRuleCapturedEOL,
                      this.endRule,
                      this.nameScopesList,
                      e
                    );
              }),
              (e.prototype.setEndRule = function (t) {
                return this.endRule === t
                  ? this
                  : new e(
                      this.parent,
                      this.ruleId,
                      this._enterPos,
                      this._anchorPos,
                      this.beginRuleCapturedEOL,
                      t,
                      this.nameScopesList,
                      this.contentNameScopesList
                    );
              }),
              (e.prototype.hasSameRuleAs = function (e) {
                return this.ruleId === e.ruleId;
              }),
              (e.NULL = new e(null, 0, 0, 0, !1, null, null, null)),
              e
            );
          })();
          t.StackElement = x;
          var P = function (e, t) {
            (this.scopes = e), (this.endPos = t);
          };
          t.LocalStackElement = P;
          var T = (function () {
            function e(e, t, n) {
              (this._emitBinaryTokens = e),
                (this._tokenTypeOverrides = n),
                o.DebugFlags.InDebugMode
                  ? (this._lineText = t)
                  : (this._lineText = null),
                (this._tokens = []),
                (this._binaryTokens = []),
                (this._lastTokenEndIndex = 0);
            }
            return (
              (e.prototype.produce = function (e, t) {
                this.produceFromScopes(e.contentNameScopesList, t);
              }),
              (e.prototype.produceFromScopes = function (e, t) {
                if (!(this._lastTokenEndIndex >= t)) {
                  if (this._emitBinaryTokens) {
                    for (
                      var n = e.metadata, r = 0, a = this._tokenTypeOverrides;
                      r < a.length;
                      r++
                    ) {
                      var s = a[r];
                      s.matcher(e.generateScopes()) &&
                        (n = C.set(n, 0, A(s.type), -1, 0, 0));
                    }
                    return (
                      (this._binaryTokens.length > 0 &&
                        this._binaryTokens[this._binaryTokens.length - 1] ===
                          n) ||
                        (this._binaryTokens.push(this._lastTokenEndIndex),
                        this._binaryTokens.push(n)),
                      void (this._lastTokenEndIndex = t)
                    );
                  }
                  var i = e.generateScopes();
                  if (o.DebugFlags.InDebugMode) {
                    console.log(
                      "  token: |" +
                        this._lineText
                          .substring(this._lastTokenEndIndex, t)
                          .replace(/\n$/, "\\n") +
                        "|"
                    );
                    for (var c = 0; c < i.length; c++)
                      console.log("      * " + i[c]);
                  }
                  this._tokens.push({
                    startIndex: this._lastTokenEndIndex,
                    endIndex: t,
                    scopes: i,
                  }),
                    (this._lastTokenEndIndex = t);
                }
              }),
              (e.prototype.getResult = function (e, t) {
                return (
                  this._tokens.length > 0 &&
                    this._tokens[this._tokens.length - 1].startIndex === t - 1 &&
                    this._tokens.pop(),
                  0 === this._tokens.length &&
                    ((this._lastTokenEndIndex = -1),
                    this.produce(e, t),
                    (this._tokens[this._tokens.length - 1].startIndex = 0)),
                  this._tokens
                );
              }),
              (e.prototype.getBinaryResult = function (e, t) {
                this._binaryTokens.length > 0 &&
                  this._binaryTokens[this._binaryTokens.length - 2] === t - 1 &&
                  (this._binaryTokens.pop(), this._binaryTokens.pop()),
                  0 === this._binaryTokens.length &&
                    ((this._lastTokenEndIndex = -1),
                    this.produce(e, t),
                    (this._binaryTokens[this._binaryTokens.length - 2] = 0));
                for (
                  var n = new Uint32Array(this._binaryTokens.length),
                    r = 0,
                    a = this._binaryTokens.length;
                  r < a;
                  r++
                )
                  n[r] = this._binaryTokens[r];
                return n;
              }),
              e
            );
          })();
          function A(e) {
            switch (e) {
              case 4:
                return 4;
              case 2:
                return 2;
              case 1:
                return 1;
              case 0:
              default:
                return 8;
            }
          }
        },
        function (e, t, n) {
          function r(e) {
            return Array.isArray(e)
              ? (function (e) {
                  for (var t = [], n = 0, a = e.length; n < a; n++)
                    t[n] = r(e[n]);
                  return t;
                })(e)
              : "object" == typeof e
              ? (function (e) {
                  var t = {};
                  for (var n in e) t[n] = r(e[n]);
                  return t;
                })(e)
              : e;
          }
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.clone = function (e) {
              return r(e);
            }),
            (t.mergeObjects = function (e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
              return (
                t.forEach(function (t) {
                  for (var n in t) e[n] = t[n];
                }),
                e
              );
            }),
            (t.basename = function e(t) {
              var n = ~t.lastIndexOf("/") || ~t.lastIndexOf("\\");
              return 0 === n
                ? t
                : ~n == t.length - 1
                ? e(t.substring(0, t.length - 1))
                : t.substr(1 + ~n);
            });
          var a = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/,
            s = (function () {
              function e() {}
              return (
                (e.hasCaptures = function (e) {
                  return null !== e && a.test(e);
                }),
                (e.replaceCaptures = function (e, t, n) {
                  return e.replace(a, function (e, r, a, s) {
                    var o = n[parseInt(r || a, 10)];
                    if (!o) return e;
                    for (var i = t.substring(o.start, o.end); "." === i[0]; )
                      i = i.substring(1);
                    switch (s) {
                      case "downcase":
                        return i.toLowerCase();
                      case "upcase":
                        return i.toUpperCase();
                      default:
                        return i;
                    }
                  });
                }),
                e
              );
            })();
          t.RegexSource = s;
        },
        function (e, t, n) {
          (function (e) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.DebugFlags = {
                InDebugMode: void 0 !== e && !!e.env.VSCODE_TEXTMATE_DEBUG,
              });
          }.call(this, n(7)));
        },
        function (e, t, n) {
          var r =
              (this && this.__awaiter) ||
              function (e, t, n, r) {
                return new (n || (n = Promise))(function (a, s) {
                  function o(e) {
                    try {
                      c(r.next(e));
                    } catch (e) {
                      s(e);
                    }
                  }
                  function i(e) {
                    try {
                      c(r.throw(e));
                    } catch (e) {
                      s(e);
                    }
                  }
                  function c(e) {
                    var t;
                    e.done
                      ? a(e.value)
                      : ((t = e.value),
                        t instanceof n
                          ? t
                          : new n(function (e) {
                              e(t);
                            })).then(o, i);
                  }
                  c((r = r.apply(e, t || [])).next());
                });
              },
            a =
              (this && this.__generator) ||
              function (e, t) {
                var n,
                  r,
                  a,
                  s,
                  o = {
                    label: 0,
                    sent: function () {
                      if (1 & a[0]) throw a[1];
                      return a[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (s = { next: i(0), throw: i(1), return: i(2) }),
                  "function" == typeof Symbol &&
                    (s[Symbol.iterator] = function () {
                      return this;
                    }),
                  s
                );
                function i(s) {
                  return function (i) {
                    return (function (s) {
                      if (n)
                        throw new TypeError("Generator is already executing.");
                      for (; o; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (a =
                                2 & s[0]
                                  ? r.return
                                  : s[0]
                                  ? r.throw || ((a = r.return) && a.call(r), 0)
                                  : r.next) &&
                              !(a = a.call(r, s[1])).done)
                          )
                            return a;
                          switch (
                            ((r = 0), a && (s = [2 & s[0], a.value]), s[0])
                          ) {
                            case 0:
                            case 1:
                              a = s;
                              break;
                            case 4:
                              return o.label++, { value: s[1], done: !1 };
                            case 5:
                              o.label++, (r = s[1]), (s = [0]);
                              continue;
                            case 7:
                              (s = o.ops.pop()), o.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (a =
                                    (a = o.trys).length > 0 && a[a.length - 1]) ||
                                  (6 !== s[0] && 2 !== s[0])
                                )
                              ) {
                                o = 0;
                                continue;
                              }
                              if (
                                3 === s[0] &&
                                (!a || (s[1] > a[0] && s[1] < a[3]))
                              ) {
                                o.label = s[1];
                                break;
                              }
                              if (6 === s[0] && o.label < a[1]) {
                                (o.label = a[1]), (a = s);
                                break;
                              }
                              if (a && o.label < a[2]) {
                                (o.label = a[2]), o.ops.push(s);
                                break;
                              }
                              a[2] && o.ops.pop(), o.trys.pop();
                              continue;
                          }
                          s = t.call(e, o);
                        } catch (e) {
                          (s = [6, e]), (r = 0);
                        } finally {
                          n = a = 0;
                        }
                      if (5 & s[0]) throw s[1];
                      return { value: s[0] ? s[1] : void 0, done: !0 };
                    })([s, i]);
                  };
                }
              };
          Object.defineProperty(t, "__esModule", { value: !0 });
          var s = n(4),
            o = n(8),
            i = n(11),
            c = n(0),
            u = (function () {
              function e(e) {
                (this._options = e),
                  (this._syncRegistry = new s.SyncRegistry(
                    i.Theme.createFromRawTheme(e.theme, e.colorMap),
                    e.onigLib
                  )),
                  (this._ensureGrammarCache = new Map());
              }
              return (
                (e.prototype.dispose = function () {
                  this._syncRegistry.dispose();
                }),
                (e.prototype.setTheme = function (e, t) {
                  this._syncRegistry.setTheme(i.Theme.createFromRawTheme(e, t));
                }),
                (e.prototype.getColorMap = function () {
                  return this._syncRegistry.getColorMap();
                }),
                (e.prototype.loadGrammarWithEmbeddedLanguages = function (
                  e,
                  t,
                  n
                ) {
                  return this.loadGrammarWithConfiguration(e, t, {
                    embeddedLanguages: n,
                  });
                }),
                (e.prototype.loadGrammarWithConfiguration = function (e, t, n) {
                  return this._loadGrammar(
                    e,
                    t,
                    n.embeddedLanguages,
                    n.tokenTypes
                  );
                }),
                (e.prototype.loadGrammar = function (e) {
                  return this._loadGrammar(e, 0, null, null);
                }),
                (e.prototype._doLoadSingleGrammar = function (e) {
                  return r(this, void 0, void 0, function () {
                    var t, n;
                    return a(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return [4, this._options.loadGrammar(e)];
                        case 1:
                          return (
                            (t = r.sent()) &&
                              ((n =
                                "function" == typeof this._options.getInjections
                                  ? this._options.getInjections(e)
                                  : void 0),
                              this._syncRegistry.addGrammar(t, n)),
                            [2]
                          );
                      }
                    });
                  });
                }),
                (e.prototype._loadSingleGrammar = function (e) {
                  return r(this, void 0, void 0, function () {
                    return a(this, function (t) {
                      return (
                        this._ensureGrammarCache.has(e) ||
                          this._ensureGrammarCache.set(
                            e,
                            this._doLoadSingleGrammar(e)
                          ),
                        [2, this._ensureGrammarCache.get(e)]
                      );
                    });
                  });
                }),
                (e.prototype._collectDependenciesForDep = function (e, t, n) {
                  var r = this._syncRegistry.lookup(n.scopeName);
                  if (r) {
                    n instanceof c.FullScopeDependency
                      ? c.collectDependencies(t, this._syncRegistry.lookup(e), r)
                      : c.collectSpecificDependencies(
                          t,
                          this._syncRegistry.lookup(e),
                          r,
                          n.include
                        );
                    var a = this._syncRegistry.injections(n.scopeName);
                    if (a)
                      for (var s = 0, o = a; s < o.length; s++) {
                        var i = o[s];
                        t.add(new c.FullScopeDependency(i));
                      }
                  } else if (n.scopeName === e)
                    throw new Error("No grammar provided for <" + e + ">");
                }),
                (e.prototype._loadGrammar = function (e, t, n, s) {
                  return r(this, void 0, void 0, function () {
                    var r,
                      o,
                      i,
                      u,
                      l,
                      p,
                      h,
                      d,
                      f,
                      g,
                      m,
                      _,
                      y = this;
                    return a(this, function (a) {
                      switch (a.label) {
                        case 0:
                          (r = new Set()),
                            (o = new Set()),
                            r.add(e),
                            (i = [new c.FullScopeDependency(e)]),
                            (a.label = 1);
                        case 1:
                          return i.length > 0
                            ? ((u = i),
                              (i = []),
                              [
                                4,
                                Promise.all(
                                  u.map(function (e) {
                                    return y._loadSingleGrammar(e.scopeName);
                                  })
                                ),
                              ])
                            : [3, 3];
                        case 2:
                          for (
                            a.sent(),
                              l = new c.ScopeDependencyCollector(),
                              p = 0,
                              h = u;
                            p < h.length;
                            p++
                          )
                            (_ = h[p]), this._collectDependenciesForDep(e, l, _);
                          for (d = 0, f = l.full; d < f.length; d++)
                            (_ = f[d]),
                              r.has(_.scopeName) ||
                                (r.add(_.scopeName), i.push(_));
                          for (g = 0, m = l.partial; g < m.length; g++)
                            (_ = m[g]),
                              r.has(_.scopeName) ||
                                o.has(_.toKey()) ||
                                (o.add(_.toKey()), i.push(_));
                          return [3, 1];
                        case 3:
                          return [2, this.grammarForScopeName(e, t, n, s)];
                      }
                    });
                  });
                }),
                (e.prototype.addGrammar = function (e, t, n, s) {
                  return (
                    void 0 === t && (t = []),
                    void 0 === n && (n = 0),
                    void 0 === s && (s = null),
                    r(this, void 0, void 0, function () {
                      return a(this, function (r) {
                        switch (r.label) {
                          case 0:
                            return (
                              this._syncRegistry.addGrammar(e, t),
                              [4, this.grammarForScopeName(e.scopeName, n, s)]
                            );
                          case 1:
                            return [2, r.sent()];
                        }
                      });
                    })
                  );
                }),
                (e.prototype.grammarForScopeName = function (e, t, n, r) {
                  return (
                    void 0 === t && (t = 0),
                    void 0 === n && (n = null),
                    void 0 === r && (r = null),
                    this._syncRegistry.grammarForScopeName(e, t, n, r)
                  );
                }),
                e
              );
            })();
          (t.Registry = u),
            (t.INITIAL = c.StackElement.NULL),
            (t.parseRawGrammar = o.parseRawGrammar);
        },
        function (e, t, n) {
          var r =
              (this && this.__awaiter) ||
              function (e, t, n, r) {
                return new (n || (n = Promise))(function (a, s) {
                  function o(e) {
                    try {
                      c(r.next(e));
                    } catch (e) {
                      s(e);
                    }
                  }
                  function i(e) {
                    try {
                      c(r.throw(e));
                    } catch (e) {
                      s(e);
                    }
                  }
                  function c(e) {
                    var t;
                    e.done
                      ? a(e.value)
                      : ((t = e.value),
                        t instanceof n
                          ? t
                          : new n(function (e) {
                              e(t);
                            })).then(o, i);
                  }
                  c((r = r.apply(e, t || [])).next());
                });
              },
            a =
              (this && this.__generator) ||
              function (e, t) {
                var n,
                  r,
                  a,
                  s,
                  o = {
                    label: 0,
                    sent: function () {
                      if (1 & a[0]) throw a[1];
                      return a[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (s = { next: i(0), throw: i(1), return: i(2) }),
                  "function" == typeof Symbol &&
                    (s[Symbol.iterator] = function () {
                      return this;
                    }),
                  s
                );
                function i(s) {
                  return function (i) {
                    return (function (s) {
                      if (n)
                        throw new TypeError("Generator is already executing.");
                      for (; o; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (a =
                                2 & s[0]
                                  ? r.return
                                  : s[0]
                                  ? r.throw || ((a = r.return) && a.call(r), 0)
                                  : r.next) &&
                              !(a = a.call(r, s[1])).done)
                          )
                            return a;
                          switch (
                            ((r = 0), a && (s = [2 & s[0], a.value]), s[0])
                          ) {
                            case 0:
                            case 1:
                              a = s;
                              break;
                            case 4:
                              return o.label++, { value: s[1], done: !1 };
                            case 5:
                              o.label++, (r = s[1]), (s = [0]);
                              continue;
                            case 7:
                              (s = o.ops.pop()), o.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (a =
                                    (a = o.trys).length > 0 && a[a.length - 1]) ||
                                  (6 !== s[0] && 2 !== s[0])
                                )
                              ) {
                                o = 0;
                                continue;
                              }
                              if (
                                3 === s[0] &&
                                (!a || (s[1] > a[0] && s[1] < a[3]))
                              ) {
                                o.label = s[1];
                                break;
                              }
                              if (6 === s[0] && o.label < a[1]) {
                                (o.label = a[1]), (a = s);
                                break;
                              }
                              if (a && o.label < a[2]) {
                                (o.label = a[2]), o.ops.push(s);
                                break;
                              }
                              a[2] && o.ops.pop(), o.trys.pop();
                              continue;
                          }
                          s = t.call(e, o);
                        } catch (e) {
                          (s = [6, e]), (r = 0);
                        } finally {
                          n = a = 0;
                        }
                      if (5 & s[0]) throw s[1];
                      return { value: s[0] ? s[1] : void 0, done: !0 };
                    })([s, i]);
                  };
                }
              };
          Object.defineProperty(t, "__esModule", { value: !0 });
          var s = n(0),
            o = (function () {
              function e(e, t) {
                (this._theme = e),
                  (this._grammars = {}),
                  (this._rawGrammars = {}),
                  (this._injectionGrammars = {}),
                  (this._onigLibPromise = t);
              }
              return (
                (e.prototype.dispose = function () {
                  for (var e in this._grammars)
                    this._grammars.hasOwnProperty(e) &&
                      this._grammars[e].dispose();
                }),
                (e.prototype.setTheme = function (e) {
                  var t = this;
                  (this._theme = e),
                    Object.keys(this._grammars).forEach(function (e) {
                      t._grammars[e].onDidChangeTheme();
                    });
                }),
                (e.prototype.getColorMap = function () {
                  return this._theme.getColorMap();
                }),
                (e.prototype.addGrammar = function (e, t) {
                  (this._rawGrammars[e.scopeName] = e),
                    t && (this._injectionGrammars[e.scopeName] = t);
                }),
                (e.prototype.lookup = function (e) {
                  return this._rawGrammars[e];
                }),
                (e.prototype.injections = function (e) {
                  return this._injectionGrammars[e];
                }),
                (e.prototype.getDefaults = function () {
                  return this._theme.getDefaults();
                }),
                (e.prototype.themeMatch = function (e) {
                  return this._theme.match(e);
                }),
                (e.prototype.grammarForScopeName = function (e, t, n, o) {
                  return r(this, void 0, void 0, function () {
                    var r, i, c, u, l;
                    return a(this, function (a) {
                      switch (a.label) {
                        case 0:
                          return this._grammars[e]
                            ? [3, 2]
                            : (r = this._rawGrammars[e])
                            ? ((i = this._grammars),
                              (c = e),
                              (u = s.createGrammar),
                              (l = [r, t, n, o, this]),
                              [4, this._onigLibPromise])
                            : [2, null];
                        case 1:
                          (i[c] = u.apply(void 0, l.concat([a.sent()]))),
                            (a.label = 2);
                        case 2:
                          return [2, this._grammars[e]];
                      }
                    });
                  });
                }),
                e
              );
            })();
          t.SyncRegistry = o;
        },
        function (e, t, n) {
          var r,
            a =
              (this && this.__extends) ||
              ((r = function (e, t) {
                return (r =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                  })(e, t);
              }),
              function (e, t) {
                function n() {
                  this.constructor = e;
                }
                r(e, t),
                  (e.prototype =
                    null === t
                      ? Object.create(t)
                      : ((n.prototype = t.prototype), new n()));
              });
          Object.defineProperty(t, "__esModule", { value: !0 });
          var s = n(1),
            o = /\\(\d+)/,
            i = /\\(\d+)/g,
            c = (function () {
              function e(e, t, n) {
                (this.debugRegExps = t),
                  (this.rules = n),
                  (this.scanner = e.createOnigScanner(t));
              }
              return (
                (e.prototype.dispose = function () {
                  "function" == typeof this.scanner.dispose &&
                    this.scanner.dispose();
                }),
                e
              );
            })();
          t.CompiledRule = c;
          var u = (function () {
            function e(e, t, n, r) {
              (this.$location = e),
                (this.id = t),
                (this._name = n || null),
                (this._nameIsCapturing = s.RegexSource.hasCaptures(this._name)),
                (this._contentName = r || null),
                (this._contentNameIsCapturing = s.RegexSource.hasCaptures(
                  this._contentName
                ));
            }
            return (
              Object.defineProperty(e.prototype, "debugName", {
                get: function () {
                  var e = this.$location
                    ? s.basename(this.$location.filename) +
                      ":" +
                      this.$location.line
                    : "unknown";
                  return this.constructor.name + "#" + this.id + " @ " + e;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.getName = function (e, t) {
                return this._nameIsCapturing &&
                  null !== this._name &&
                  null !== e &&
                  null !== t
                  ? s.RegexSource.replaceCaptures(this._name, e, t)
                  : this._name;
              }),
              (e.prototype.getContentName = function (e, t) {
                return this._contentNameIsCapturing && null !== this._contentName
                  ? s.RegexSource.replaceCaptures(this._contentName, e, t)
                  : this._contentName;
              }),
              e
            );
          })();
          t.Rule = u;
          var l = (function (e) {
            function t(t, n, r, a, s) {
              var o = e.call(this, t, n, r, a) || this;
              return (o.retokenizeCapturedWithRuleId = s), o;
            }
            return (
              a(t, e),
              (t.prototype.dispose = function () {}),
              (t.prototype.collectPatternsRecursive = function (e, t, n) {
                throw new Error("Not supported!");
              }),
              (t.prototype.compile = function (e, t, n, r) {
                throw new Error("Not supported!");
              }),
              t
            );
          })(u);
          t.CaptureRule = l;
          var p = (function () {
            function e(e, t, n) {
              if ((void 0 === n && (n = !0), n))
                if (e) {
                  for (var r = e.length, a = 0, s = [], i = !1, c = 0; c < r; c++)
                    if ("\\" === e.charAt(c) && c + 1 < r) {
                      var u = e.charAt(c + 1);
                      "z" === u
                        ? (s.push(e.substring(a, c)),
                          s.push("$(?!\\n)(?<!\\n)"),
                          (a = c + 2))
                        : ("A" !== u && "G" !== u) || (i = !0),
                        c++;
                    }
                  (this.hasAnchor = i),
                    0 === a
                      ? (this.source = e)
                      : (s.push(e.substring(a, r)), (this.source = s.join("")));
                } else (this.hasAnchor = !1), (this.source = e);
              else (this.hasAnchor = !1), (this.source = e);
              this.hasAnchor
                ? (this._anchorCache = this._buildAnchorCache())
                : (this._anchorCache = null),
                (this.ruleId = t),
                (this.hasBackReferences = o.test(this.source));
            }
            return (
              (e.prototype.clone = function () {
                return new e(this.source, this.ruleId, !0);
              }),
              (e.prototype.setSource = function (e) {
                this.source !== e &&
                  ((this.source = e),
                  this.hasAnchor &&
                    (this._anchorCache = this._buildAnchorCache()));
              }),
              (e.prototype.resolveBackReferences = function (e, t) {
                var n = t.map(function (t) {
                  return e.substring(t.start, t.end);
                });
                return (
                  (i.lastIndex = 0),
                  this.source.replace(i, function (e, t) {
                    return (n[parseInt(t, 10)] || "").replace(
                      /[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,
                      "\\$&"
                    );
                  })
                );
              }),
              (e.prototype._buildAnchorCache = function () {
                var e,
                  t,
                  n,
                  r,
                  a = [],
                  s = [],
                  o = [],
                  i = [];
                for (e = 0, t = this.source.length; e < t; e++)
                  (n = this.source.charAt(e)),
                    (a[e] = n),
                    (s[e] = n),
                    (o[e] = n),
                    (i[e] = n),
                    "\\" === n &&
                      e + 1 < t &&
                      ("A" === (r = this.source.charAt(e + 1))
                        ? ((a[e + 1] = "￿"),
                          (s[e + 1] = "￿"),
                          (o[e + 1] = "A"),
                          (i[e + 1] = "A"))
                        : "G" === r
                        ? ((a[e + 1] = "￿"),
                          (s[e + 1] = "G"),
                          (o[e + 1] = "￿"),
                          (i[e + 1] = "G"))
                        : ((a[e + 1] = r),
                          (s[e + 1] = r),
                          (o[e + 1] = r),
                          (i[e + 1] = r)),
                      e++);
                return {
                  A0_G0: a.join(""),
                  A0_G1: s.join(""),
                  A1_G0: o.join(""),
                  A1_G1: i.join(""),
                };
              }),
              (e.prototype.resolveAnchors = function (e, t) {
                return this.hasAnchor && this._anchorCache
                  ? e
                    ? t
                      ? this._anchorCache.A1_G1
                      : this._anchorCache.A1_G0
                    : t
                    ? this._anchorCache.A0_G1
                    : this._anchorCache.A0_G0
                  : this.source;
              }),
              e
            );
          })();
          t.RegExpSource = p;
          var h = (function () {
            function e() {
              (this._items = []),
                (this._hasAnchors = !1),
                (this._cached = null),
                (this._anchorCache = {
                  A0_G0: null,
                  A0_G1: null,
                  A1_G0: null,
                  A1_G1: null,
                });
            }
            return (
              (e.prototype.dispose = function () {
                this._disposeCaches();
              }),
              (e.prototype._disposeCaches = function () {
                this._cached && (this._cached.dispose(), (this._cached = null)),
                  this._anchorCache.A0_G0 &&
                    (this._anchorCache.A0_G0.dispose(),
                    (this._anchorCache.A0_G0 = null)),
                  this._anchorCache.A0_G1 &&
                    (this._anchorCache.A0_G1.dispose(),
                    (this._anchorCache.A0_G1 = null)),
                  this._anchorCache.A1_G0 &&
                    (this._anchorCache.A1_G0.dispose(),
                    (this._anchorCache.A1_G0 = null)),
                  this._anchorCache.A1_G1 &&
                    (this._anchorCache.A1_G1.dispose(),
                    (this._anchorCache.A1_G1 = null));
              }),
              (e.prototype.push = function (e) {
                this._items.push(e),
                  (this._hasAnchors = this._hasAnchors || e.hasAnchor);
              }),
              (e.prototype.unshift = function (e) {
                this._items.unshift(e),
                  (this._hasAnchors = this._hasAnchors || e.hasAnchor);
              }),
              (e.prototype.length = function () {
                return this._items.length;
              }),
              (e.prototype.setSource = function (e, t) {
                this._items[e].source !== t &&
                  (this._disposeCaches(), this._items[e].setSource(t));
              }),
              (e.prototype.compile = function (e, t, n) {
                if (this._hasAnchors)
                  return t
                    ? n
                      ? (this._anchorCache.A1_G1 ||
                          (this._anchorCache.A1_G1 = this._resolveAnchors(
                            e,
                            t,
                            n
                          )),
                        this._anchorCache.A1_G1)
                      : (this._anchorCache.A1_G0 ||
                          (this._anchorCache.A1_G0 = this._resolveAnchors(
                            e,
                            t,
                            n
                          )),
                        this._anchorCache.A1_G0)
                    : n
                    ? (this._anchorCache.A0_G1 ||
                        (this._anchorCache.A0_G1 = this._resolveAnchors(e, t, n)),
                      this._anchorCache.A0_G1)
                    : (this._anchorCache.A0_G0 ||
                        (this._anchorCache.A0_G0 = this._resolveAnchors(e, t, n)),
                      this._anchorCache.A0_G0);
                if (!this._cached) {
                  var r = this._items.map(function (e) {
                    return e.source;
                  });
                  this._cached = new c(
                    e,
                    r,
                    this._items.map(function (e) {
                      return e.ruleId;
                    })
                  );
                }
                return this._cached;
              }),
              (e.prototype._resolveAnchors = function (e, t, n) {
                var r = this._items.map(function (e) {
                  return e.resolveAnchors(t, n);
                });
                return new c(
                  e,
                  r,
                  this._items.map(function (e) {
                    return e.ruleId;
                  })
                );
              }),
              e
            );
          })();
          t.RegExpSourceList = h;
          var d = (function (e) {
            function t(t, n, r, a, s) {
              var o = e.call(this, t, n, r, null) || this;
              return (
                (o._match = new p(a, o.id)),
                (o.captures = s),
                (o._cachedCompiledPatterns = null),
                o
              );
            }
            return (
              a(t, e),
              (t.prototype.dispose = function () {
                this._cachedCompiledPatterns &&
                  (this._cachedCompiledPatterns.dispose(),
                  (this._cachedCompiledPatterns = null));
              }),
              Object.defineProperty(t.prototype, "debugMatchRegExp", {
                get: function () {
                  return "" + this._match.source;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.collectPatternsRecursive = function (e, t, n) {
                t.push(this._match);
              }),
              (t.prototype.compile = function (e, t, n, r) {
                return (
                  this._cachedCompiledPatterns ||
                    ((this._cachedCompiledPatterns = new h()),
                    this.collectPatternsRecursive(
                      e,
                      this._cachedCompiledPatterns,
                      !0
                    )),
                  this._cachedCompiledPatterns.compile(e, n, r)
                );
              }),
              t
            );
          })(u);
          t.MatchRule = d;
          var f = (function (e) {
            function t(t, n, r, a, s) {
              var o = e.call(this, t, n, r, a) || this;
              return (
                (o.patterns = s.patterns),
                (o.hasMissingPatterns = s.hasMissingPatterns),
                (o._cachedCompiledPatterns = null),
                o
              );
            }
            return (
              a(t, e),
              (t.prototype.dispose = function () {
                this._cachedCompiledPatterns &&
                  (this._cachedCompiledPatterns.dispose(),
                  (this._cachedCompiledPatterns = null));
              }),
              (t.prototype.collectPatternsRecursive = function (e, t, n) {
                var r, a;
                for (r = 0, a = this.patterns.length; r < a; r++)
                  e.getRule(this.patterns[r]).collectPatternsRecursive(e, t, !1);
              }),
              (t.prototype.compile = function (e, t, n, r) {
                return (
                  this._cachedCompiledPatterns ||
                    ((this._cachedCompiledPatterns = new h()),
                    this.collectPatternsRecursive(
                      e,
                      this._cachedCompiledPatterns,
                      !0
                    )),
                  this._cachedCompiledPatterns.compile(e, n, r)
                );
              }),
              t
            );
          })(u);
          t.IncludeOnlyRule = f;
          var g = (function (e) {
            function t(t, n, r, a, s, o, i, c, u, l) {
              var h = e.call(this, t, n, r, a) || this;
              return (
                (h._begin = new p(s, h.id)),
                (h.beginCaptures = o),
                (h._end = new p(i || "￿", -1)),
                (h.endHasBackReferences = h._end.hasBackReferences),
                (h.endCaptures = c),
                (h.applyEndPatternLast = u || !1),
                (h.patterns = l.patterns),
                (h.hasMissingPatterns = l.hasMissingPatterns),
                (h._cachedCompiledPatterns = null),
                h
              );
            }
            return (
              a(t, e),
              (t.prototype.dispose = function () {
                this._cachedCompiledPatterns &&
                  (this._cachedCompiledPatterns.dispose(),
                  (this._cachedCompiledPatterns = null));
              }),
              Object.defineProperty(t.prototype, "debugBeginRegExp", {
                get: function () {
                  return "" + this._begin.source;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "debugEndRegExp", {
                get: function () {
                  return "" + this._end.source;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.getEndWithResolvedBackReferences = function (e, t) {
                return this._end.resolveBackReferences(e, t);
              }),
              (t.prototype.collectPatternsRecursive = function (e, t, n) {
                if (n) {
                  var r,
                    a = void 0;
                  for (a = 0, r = this.patterns.length; a < r; a++)
                    e.getRule(this.patterns[a]).collectPatternsRecursive(
                      e,
                      t,
                      !1
                    );
                } else t.push(this._begin);
              }),
              (t.prototype.compile = function (e, t, n, r) {
                return (
                  this._cachedCompiledPatterns ||
                    ((this._cachedCompiledPatterns = new h()),
                    this.collectPatternsRecursive(
                      e,
                      this._cachedCompiledPatterns,
                      !0
                    ),
                    this.applyEndPatternLast
                      ? this._cachedCompiledPatterns.push(
                          this._end.hasBackReferences
                            ? this._end.clone()
                            : this._end
                        )
                      : this._cachedCompiledPatterns.unshift(
                          this._end.hasBackReferences
                            ? this._end.clone()
                            : this._end
                        )),
                  this._end.hasBackReferences &&
                    (this.applyEndPatternLast
                      ? this._cachedCompiledPatterns.setSource(
                          this._cachedCompiledPatterns.length() - 1,
                          t
                        )
                      : this._cachedCompiledPatterns.setSource(0, t)),
                  this._cachedCompiledPatterns.compile(e, n, r)
                );
              }),
              t
            );
          })(u);
          t.BeginEndRule = g;
          var m = (function (e) {
            function t(t, n, r, a, s, o, i, c, u) {
              var l = e.call(this, t, n, r, a) || this;
              return (
                (l._begin = new p(s, l.id)),
                (l.beginCaptures = o),
                (l.whileCaptures = c),
                (l._while = new p(i, -2)),
                (l.whileHasBackReferences = l._while.hasBackReferences),
                (l.patterns = u.patterns),
                (l.hasMissingPatterns = u.hasMissingPatterns),
                (l._cachedCompiledPatterns = null),
                (l._cachedCompiledWhilePatterns = null),
                l
              );
            }
            return (
              a(t, e),
              (t.prototype.dispose = function () {
                this._cachedCompiledPatterns &&
                  (this._cachedCompiledPatterns.dispose(),
                  (this._cachedCompiledPatterns = null)),
                  this._cachedCompiledWhilePatterns &&
                    (this._cachedCompiledWhilePatterns.dispose(),
                    (this._cachedCompiledWhilePatterns = null));
              }),
              Object.defineProperty(t.prototype, "debugBeginRegExp", {
                get: function () {
                  return "" + this._begin.source;
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "debugWhileRegExp", {
                get: function () {
                  return "" + this._while.source;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.getWhileWithResolvedBackReferences = function (e, t) {
                return this._while.resolveBackReferences(e, t);
              }),
              (t.prototype.collectPatternsRecursive = function (e, t, n) {
                if (n) {
                  var r,
                    a = void 0;
                  for (a = 0, r = this.patterns.length; a < r; a++)
                    e.getRule(this.patterns[a]).collectPatternsRecursive(
                      e,
                      t,
                      !1
                    );
                } else t.push(this._begin);
              }),
              (t.prototype.compile = function (e, t, n, r) {
                return (
                  this._cachedCompiledPatterns ||
                    ((this._cachedCompiledPatterns = new h()),
                    this.collectPatternsRecursive(
                      e,
                      this._cachedCompiledPatterns,
                      !0
                    )),
                  this._cachedCompiledPatterns.compile(e, n, r)
                );
              }),
              (t.prototype.compileWhile = function (e, t, n, r) {
                return (
                  this._cachedCompiledWhilePatterns ||
                    ((this._cachedCompiledWhilePatterns = new h()),
                    this._cachedCompiledWhilePatterns.push(
                      this._while.hasBackReferences
                        ? this._while.clone()
                        : this._while
                    )),
                  this._while.hasBackReferences &&
                    this._cachedCompiledWhilePatterns.setSource(0, t || "￿"),
                  this._cachedCompiledWhilePatterns.compile(e, n, r)
                );
              }),
              t
            );
          })(u);
          t.BeginWhileRule = m;
          var _ = (function () {
            function e() {}
            return (
              (e.createCaptureRule = function (e, t, n, r, a) {
                return e.registerRule(function (e) {
                  return new l(t, e, n, r, a);
                });
              }),
              (e.getCompiledRuleId = function (t, n, r) {
                return (
                  t.id ||
                    n.registerRule(function (a) {
                      if (((t.id = a), t.match))
                        return new d(
                          t.$vscodeTextmateLocation,
                          t.id,
                          t.name,
                          t.match,
                          e._compileCaptures(t.captures, n, r)
                        );
                      if (void 0 === t.begin) {
                        t.repository && (r = s.mergeObjects({}, r, t.repository));
                        var o = t.patterns;
                        return (
                          void 0 === o &&
                            t.include &&
                            (o = [{ include: t.include }]),
                          new f(
                            t.$vscodeTextmateLocation,
                            t.id,
                            t.name,
                            t.contentName,
                            e._compilePatterns(o, n, r)
                          )
                        );
                      }
                      return t.while
                        ? new m(
                            t.$vscodeTextmateLocation,
                            t.id,
                            t.name,
                            t.contentName,
                            t.begin,
                            e._compileCaptures(
                              t.beginCaptures || t.captures,
                              n,
                              r
                            ),
                            t.while,
                            e._compileCaptures(
                              t.whileCaptures || t.captures,
                              n,
                              r
                            ),
                            e._compilePatterns(t.patterns, n, r)
                          )
                        : new g(
                            t.$vscodeTextmateLocation,
                            t.id,
                            t.name,
                            t.contentName,
                            t.begin,
                            e._compileCaptures(
                              t.beginCaptures || t.captures,
                              n,
                              r
                            ),
                            t.end,
                            e._compileCaptures(t.endCaptures || t.captures, n, r),
                            t.applyEndPatternLast,
                            e._compilePatterns(t.patterns, n, r)
                          );
                    }),
                  t.id
                );
              }),
              (e._compileCaptures = function (t, n, r) {
                var a = [];
                if (t) {
                  var s = 0;
                  for (var o in t)
                    "$vscodeTextmateLocation" !== o &&
                      (c = parseInt(o, 10)) > s &&
                      (s = c);
                  for (var i = 0; i <= s; i++) a[i] = null;
                  for (var o in t)
                    if ("$vscodeTextmateLocation" !== o) {
                      var c = parseInt(o, 10),
                        u = 0;
                      t[o].patterns && (u = e.getCompiledRuleId(t[o], n, r)),
                        (a[c] = e.createCaptureRule(
                          n,
                          t[o].$vscodeTextmateLocation,
                          t[o].name,
                          t[o].contentName,
                          u
                        ));
                    }
                }
                return a;
              }),
              (e._compilePatterns = function (t, n, r) {
                var a = [];
                if (t)
                  for (var s = 0, o = t.length; s < o; s++) {
                    var i = t[s],
                      c = -1;
                    if (i.include)
                      if ("#" === i.include.charAt(0)) {
                        var u = r[i.include.substr(1)];
                        u && (c = e.getCompiledRuleId(u, n, r));
                      } else if ("$base" === i.include || "$self" === i.include)
                        c = e.getCompiledRuleId(r[i.include], n, r);
                      else {
                        var l = null,
                          p = null,
                          h = i.include.indexOf("#");
                        h >= 0
                          ? ((l = i.include.substring(0, h)),
                            (p = i.include.substring(h + 1)))
                          : (l = i.include);
                        var d = n.getExternalGrammar(l, r);
                        if (d)
                          if (p) {
                            var _ = d.repository[p];
                            _ && (c = e.getCompiledRuleId(_, n, d.repository));
                          } else
                            c = e.getCompiledRuleId(
                              d.repository.$self,
                              n,
                              d.repository
                            );
                      }
                    else c = e.getCompiledRuleId(i, n, r);
                    if (-1 !== c) {
                      var y = n.getRule(c),
                        v = !1;
                      if (
                        ((y instanceof f || y instanceof g || y instanceof m) &&
                          y.hasMissingPatterns &&
                          0 === y.patterns.length &&
                          (v = !0),
                        v)
                      )
                        continue;
                      a.push(c);
                    }
                  }
                return {
                  patterns: a,
                  hasMissingPatterns: (t ? t.length : 0) !== a.length,
                };
              }),
              e
            );
          })();
          t.RuleFactory = _;
        },
        function (e, t, n) {
          function r(e) {
            return !!e && !!e.match(/[\w\.:]+/);
          }
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.createMatchers = function (e, t) {
              for (
                var n,
                  a,
                  s,
                  o = [],
                  i =
                    ((s = (a = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g).exec(
                      (n = e)
                    )),
                    {
                      next: function () {
                        if (!s) return null;
                        var e = s[0];
                        return (s = a.exec(n)), e;
                      },
                    }),
                  c = i.next();
                null !== c;
  
              ) {
                var u = 0;
                if (2 === c.length && ":" === c.charAt(1)) {
                  switch (c.charAt(0)) {
                    case "R":
                      u = 1;
                      break;
                    case "L":
                      u = -1;
                      break;
                    default:
                      console.log("Unknown priority " + c + " in scope selector");
                  }
                  c = i.next();
                }
                var l = h();
                if ((o.push({ matcher: l, priority: u }), "," !== c)) break;
                c = i.next();
              }
              return o;
              function p() {
                if ("-" === c) {
                  c = i.next();
                  var e = p();
                  return function (t) {
                    return !!e && !e(t);
                  };
                }
                if ("(" === c) {
                  c = i.next();
                  var n = (function () {
                    for (
                      var e = [], t = h();
                      t && (e.push(t), "|" === c || "," === c);
  
                    ) {
                      do {
                        c = i.next();
                      } while ("|" === c || "," === c);
                      t = h();
                    }
                    return function (t) {
                      return e.some(function (e) {
                        return e(t);
                      });
                    };
                  })();
                  return ")" === c && (c = i.next()), n;
                }
                if (r(c)) {
                  var a = [];
                  do {
                    a.push(c), (c = i.next());
                  } while (r(c));
                  return function (e) {
                    return t(a, e);
                  };
                }
                return null;
              }
              function h() {
                for (var e = [], t = p(); t; ) e.push(t), (t = p());
                return function (t) {
                  return e.every(function (e) {
                    return e(t);
                  });
                };
              }
            });
        },
        function (e, t) {
          var n,
            r,
            a = (e.exports = {});
          function s() {
            throw new Error("setTimeout has not been defined");
          }
          function o() {
            throw new Error("clearTimeout has not been defined");
          }
          function i(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === s || !n) && setTimeout)
              return (n = setTimeout), setTimeout(e, 0);
            try {
              return n(e, 0);
            } catch (t) {
              try {
                return n.call(null, e, 0);
              } catch (t) {
                return n.call(this, e, 0);
              }
            }
          }
          !(function () {
            try {
              n = "function" == typeof setTimeout ? setTimeout : s;
            } catch (e) {
              n = s;
            }
            try {
              r = "function" == typeof clearTimeout ? clearTimeout : o;
            } catch (e) {
              r = o;
            }
          })();
          var c,
            u = [],
            l = !1,
            p = -1;
          function h() {
            l &&
              c &&
              ((l = !1),
              c.length ? (u = c.concat(u)) : (p = -1),
              u.length && d());
          }
          function d() {
            if (!l) {
              var e = i(h);
              l = !0;
              for (var t = u.length; t; ) {
                for (c = u, u = []; ++p < t; ) c && c[p].run();
                (p = -1), (t = u.length);
              }
              (c = null),
                (l = !1),
                (function (e) {
                  if (r === clearTimeout) return clearTimeout(e);
                  if ((r === o || !r) && clearTimeout)
                    return (r = clearTimeout), clearTimeout(e);
                  try {
                    r(e);
                  } catch (t) {
                    try {
                      return r.call(null, e);
                    } catch (t) {
                      return r.call(this, e);
                    }
                  }
                })(e);
            }
          }
          function f(e, t) {
            (this.fun = e), (this.array = t);
          }
          function g() {}
          (a.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            u.push(new f(e, t)), 1 !== u.length || l || i(d);
          }),
            (f.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (a.title = "browser"),
            (a.browser = !0),
            (a.env = {}),
            (a.argv = []),
            (a.version = ""),
            (a.versions = {}),
            (a.on = g),
            (a.addListener = g),
            (a.once = g),
            (a.off = g),
            (a.removeListener = g),
            (a.removeAllListeners = g),
            (a.emit = g),
            (a.prependListener = g),
            (a.prependOnceListener = g),
            (a.listeners = function (e) {
              return [];
            }),
            (a.binding = function (e) {
              throw new Error("process.binding is not supported");
            }),
            (a.cwd = function () {
              return "/";
            }),
            (a.chdir = function (e) {
              throw new Error("process.chdir is not supported");
            }),
            (a.umask = function () {
              return 0;
            });
        },
        function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = n(9),
            a = n(2),
            s = n(10);
          t.parseRawGrammar = function (e, t) {
            return (
              void 0 === t && (t = null),
              null !== t && /\.json$/.test(t)
                ? (function (e, t) {
                    return a.DebugFlags.InDebugMode
                      ? s.parse(e, t, !0)
                      : JSON.parse(e);
                  })(e, t)
                : (function (e, t) {
                    return a.DebugFlags.InDebugMode
                      ? r.parseWithLocation(e, t, "$vscodeTextmateLocation")
                      : r.parse(e);
                  })(e, t)
            );
          };
        },
        function (e, t, n) {
          function r(e, t, n) {
            var r = e.length,
              a = 0,
              s = 1,
              o = 0;
            function i(t) {
              if (null === n) a += t;
              else
                for (; t > 0; )
                  10 === e.charCodeAt(a) ? (a++, s++, (o = 0)) : (a++, o++), t--;
            }
            function c(e) {
              null === n ? (a = e) : i(e - a);
            }
            function u() {
              for (; a < r; ) {
                var t = e.charCodeAt(a);
                if (32 !== t && 9 !== t && 13 !== t && 10 !== t) break;
                i(1);
              }
            }
            function l(t) {
              return e.substr(a, t.length) === t && (i(t.length), !0);
            }
            function p(t) {
              var n = e.indexOf(t, a);
              c(-1 !== n ? n + t.length : r);
            }
            function h(t) {
              var n = e.indexOf(t, a);
              if (-1 !== n) {
                var s = e.substring(a, n);
                return c(n + t.length), s;
              }
              return (s = e.substr(a)), c(r), s;
            }
            r > 0 && 65279 === e.charCodeAt(0) && (a = 1);
            var d = 0,
              f = null,
              g = [],
              m = [],
              _ = null;
            function y(e, t) {
              g.push(d), m.push(f), (d = e), (f = t);
            }
            function v() {
              if (0 === g.length) return b("illegal state stack");
              (d = g.pop()), (f = m.pop());
            }
            function b(t) {
              throw new Error(
                "Near offset " + a + ": " + t + " ~~~" + e.substr(a, 50) + "~~~"
              );
            }
            var k,
              L,
              w,
              j = function () {
                if (null === _) return b("missing <key>");
                var e = {};
                null !== n && (e[n] = { filename: t, line: s, char: o }),
                  (f[_] = e),
                  (_ = null),
                  y(1, e);
              },
              S = function () {
                if (null === _) return b("missing <key>");
                var e = [];
                (f[_] = e), (_ = null), y(2, e);
              },
              C = function () {
                var e = {};
                null !== n && (e[n] = { filename: t, line: s, char: o }),
                  f.push(e),
                  y(1, e);
              },
              N = function () {
                var e = [];
                f.push(e), y(2, e);
              };
            function x() {
              if (1 !== d) return b("unexpected </dict>");
              v();
            }
            function P() {
              return 1 === d || 2 !== d ? b("unexpected </array>") : void v();
            }
            function T(e) {
              if (1 === d) {
                if (null === _) return b("missing <key>");
                (f[_] = e), (_ = null);
              } else 2 === d ? f.push(e) : (f = e);
            }
            function A(e) {
              if (isNaN(e)) return b("cannot parse float");
              if (1 === d) {
                if (null === _) return b("missing <key>");
                (f[_] = e), (_ = null);
              } else 2 === d ? f.push(e) : (f = e);
            }
            function R(e) {
              if (isNaN(e)) return b("cannot parse integer");
              if (1 === d) {
                if (null === _) return b("missing <key>");
                (f[_] = e), (_ = null);
              } else 2 === d ? f.push(e) : (f = e);
            }
            function I(e) {
              if (1 === d) {
                if (null === _) return b("missing <key>");
                (f[_] = e), (_ = null);
              } else 2 === d ? f.push(e) : (f = e);
            }
            function O(e) {
              if (1 === d) {
                if (null === _) return b("missing <key>");
                (f[_] = e), (_ = null);
              } else 2 === d ? f.push(e) : (f = e);
            }
            function M(e) {
              if (1 === d) {
                if (null === _) return b("missing <key>");
                (f[_] = e), (_ = null);
              } else 2 === d ? f.push(e) : (f = e);
            }
            function E(e) {
              if (e.isClosed) return "";
              var t = h("</");
              return (
                p(">"),
                t
                  .replace(/&#([0-9]+);/g, function (e, t) {
                    return String.fromCodePoint(parseInt(t, 10));
                  })
                  .replace(/&#x([0-9a-f]+);/g, function (e, t) {
                    return String.fromCodePoint(parseInt(t, 16));
                  })
                  .replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g, function (e) {
                    switch (e) {
                      case "&amp;":
                        return "&";
                      case "&lt;":
                        return "<";
                      case "&gt;":
                        return ">";
                      case "&quot;":
                        return '"';
                      case "&apos;":
                        return "'";
                    }
                    return e;
                  })
              );
            }
            for (; a < r && (u(), !(a >= r)); ) {
              var D = e.charCodeAt(a);
              if ((i(1), 60 !== D)) return b("expected <");
              if (a >= r) return b("unexpected end of input");
              var G = e.charCodeAt(a);
              if (63 !== G)
                if (33 !== G) {
                  if (47 === G) {
                    if ((i(1), u(), l("plist"))) {
                      p(">");
                      continue;
                    }
                    if (l("dict")) {
                      p(">"), x();
                      continue;
                    }
                    if (l("array")) {
                      p(">"), P();
                      continue;
                    }
                    return b("unexpected closed tag");
                  }
                  var F =
                    ((L = void 0),
                    (w = void 0),
                    (w = !1),
                    47 === (L = h(">")).charCodeAt(L.length - 1) &&
                      ((w = !0), (L = L.substring(0, L.length - 1))),
                    { name: L.trim(), isClosed: w });
                  switch (F.name) {
                    case "dict":
                      1 === d
                        ? j()
                        : 2 === d
                        ? C()
                        : ((f = {}),
                          null !== n &&
                            (f[n] = { filename: t, line: s, char: o }),
                          y(1, f)),
                        F.isClosed && x();
                      continue;
                    case "array":
                      1 === d ? S() : 2 === d ? N() : y(2, (f = [])),
                        F.isClosed && P();
                      continue;
                    case "key":
                      (k = E(F)),
                        1 !== d
                          ? b("unexpected <key>")
                          : null !== _
                          ? b("too many <key>")
                          : (_ = k);
                      continue;
                    case "string":
                      T(E(F));
                      continue;
                    case "real":
                      A(parseFloat(E(F)));
                      continue;
                    case "integer":
                      R(parseInt(E(F), 10));
                      continue;
                    case "date":
                      I(new Date(E(F)));
                      continue;
                    case "data":
                      O(E(F));
                      continue;
                    case "true":
                      E(F), M(!0);
                      continue;
                    case "false":
                      E(F), M(!1);
                      continue;
                  }
                  if (!/^plist/.test(F.name))
                    return b("unexpected opened tag " + F.name);
                } else {
                  if ((i(1), l("--"))) {
                    p("--\x3e");
                    continue;
                  }
                  p(">");
                }
              else i(1), p("?>");
            }
            return f;
          }
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.parseWithLocation = function (e, t, n) {
              return r(e, t, n);
            }),
            (t.parse = function (e) {
              return r(e, null, null);
            });
        },
        function (e, t, n) {
          function r(e, t) {
            throw new Error(
              "Near offset " +
                e.pos +
                ": " +
                t +
                " ~~~" +
                e.source.substr(e.pos, 50) +
                "~~~"
            );
          }
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.parse = function (e, t, n) {
              var i = new a(e),
                c = new s(),
                u = 0,
                l = null,
                p = [],
                h = [];
              function d() {
                p.push(u), h.push(l);
              }
              function f() {
                (u = p.pop()), (l = h.pop());
              }
              function g(e) {
                r(i, e);
              }
              for (; o(i, c); ) {
                if (0 === u) {
                  if (
                    (null !== l && g("too many constructs in root"), 3 === c.type)
                  ) {
                    (l = {}),
                      n && (l.$vscodeTextmateLocation = c.toLocation(t)),
                      d(),
                      (u = 1);
                    continue;
                  }
                  if (2 === c.type) {
                    (l = []), d(), (u = 4);
                    continue;
                  }
                  g("unexpected token in root");
                }
                if (2 === u) {
                  if (5 === c.type) {
                    f();
                    continue;
                  }
                  if (7 === c.type) {
                    u = 3;
                    continue;
                  }
                  g("expected , or }");
                }
                if (1 === u || 3 === u) {
                  if (1 === u && 5 === c.type) {
                    f();
                    continue;
                  }
                  if (1 === c.type) {
                    var m = c.value;
                    if (
                      ((o(i, c) && 6 === c.type) || g("expected colon"),
                      o(i, c) || g("expected value"),
                      (u = 2),
                      1 === c.type)
                    ) {
                      l[m] = c.value;
                      continue;
                    }
                    if (8 === c.type) {
                      l[m] = null;
                      continue;
                    }
                    if (9 === c.type) {
                      l[m] = !0;
                      continue;
                    }
                    if (10 === c.type) {
                      l[m] = !1;
                      continue;
                    }
                    if (11 === c.type) {
                      l[m] = parseFloat(c.value);
                      continue;
                    }
                    if (2 === c.type) {
                      var _ = [];
                      (l[m] = _), d(), (u = 4), (l = _);
                      continue;
                    }
                    if (3 === c.type) {
                      var y = {};
                      n && (y.$vscodeTextmateLocation = c.toLocation(t)),
                        (l[m] = y),
                        d(),
                        (u = 1),
                        (l = y);
                      continue;
                    }
                  }
                  g("unexpected token in dict");
                }
                if (5 === u) {
                  if (4 === c.type) {
                    f();
                    continue;
                  }
                  if (7 === c.type) {
                    u = 6;
                    continue;
                  }
                  g("expected , or ]");
                }
                if (4 === u || 6 === u) {
                  if (4 === u && 4 === c.type) {
                    f();
                    continue;
                  }
                  if (((u = 5), 1 === c.type)) {
                    l.push(c.value);
                    continue;
                  }
                  if (8 === c.type) {
                    l.push(null);
                    continue;
                  }
                  if (9 === c.type) {
                    l.push(!0);
                    continue;
                  }
                  if (10 === c.type) {
                    l.push(!1);
                    continue;
                  }
                  if (11 === c.type) {
                    l.push(parseFloat(c.value));
                    continue;
                  }
                  if (2 === c.type) {
                    (_ = []), l.push(_), d(), (u = 4), (l = _);
                    continue;
                  }
                  if (3 === c.type) {
                    (y = {}),
                      n && (y.$vscodeTextmateLocation = c.toLocation(t)),
                      l.push(y),
                      d(),
                      (u = 1),
                      (l = y);
                    continue;
                  }
                  g("unexpected token in array");
                }
                g("unknown state");
              }
              return 0 !== h.length && g("unclosed constructs"), l;
            });
          var a = function (e) {
              (this.source = e),
                (this.pos = 0),
                (this.len = e.length),
                (this.line = 1),
                (this.char = 0);
            },
            s = (function () {
              function e() {
                (this.value = null),
                  (this.type = 0),
                  (this.offset = -1),
                  (this.len = -1),
                  (this.line = -1),
                  (this.char = -1);
              }
              return (
                (e.prototype.toLocation = function (e) {
                  return { filename: e, line: this.line, char: this.char };
                }),
                e
              );
            })();
          function o(e, t) {
            (t.value = null),
              (t.type = 0),
              (t.offset = -1),
              (t.len = -1),
              (t.line = -1),
              (t.char = -1);
            for (
              var n, a = e.source, s = e.pos, o = e.len, i = e.line, c = e.char;
              ;
  
            ) {
              if (s >= o) return !1;
              if (32 !== (n = a.charCodeAt(s)) && 9 !== n && 13 !== n) {
                if (10 !== n) break;
                s++, i++, (c = 0);
              } else s++, c++;
            }
            if (((t.offset = s), (t.line = i), (t.char = c), 34 === n)) {
              for (t.type = 1, s++, c++; ; ) {
                if (s >= o) return !1;
                if (((n = a.charCodeAt(s)), s++, c++, 92 !== n)) {
                  if (34 === n) break;
                } else s++, c++;
              }
              t.value = a
                .substring(t.offset + 1, s - 1)
                .replace(/\\u([0-9A-Fa-f]{4})/g, function (e, t) {
                  return String.fromCodePoint(parseInt(t, 16));
                })
                .replace(/\\(.)/g, function (t, n) {
                  switch (n) {
                    case '"':
                      return '"';
                    case "\\":
                      return "\\";
                    case "/":
                      return "/";
                    case "b":
                      return "\b";
                    case "f":
                      return "\f";
                    case "n":
                      return "\n";
                    case "r":
                      return "\r";
                    case "t":
                      return "\t";
                    default:
                      r(e, "invalid escape sequence");
                  }
                  throw new Error("unreachable");
                });
            } else if (91 === n) (t.type = 2), s++, c++;
            else if (123 === n) (t.type = 3), s++, c++;
            else if (93 === n) (t.type = 4), s++, c++;
            else if (125 === n) (t.type = 5), s++, c++;
            else if (58 === n) (t.type = 6), s++, c++;
            else if (44 === n) (t.type = 7), s++, c++;
            else if (110 === n) {
              if (((t.type = 8), s++, c++, 117 !== (n = a.charCodeAt(s))))
                return !1;
              if ((s++, c++, 108 !== (n = a.charCodeAt(s)))) return !1;
              if ((s++, c++, 108 !== (n = a.charCodeAt(s)))) return !1;
              s++, c++;
            } else if (116 === n) {
              if (((t.type = 9), s++, c++, 114 !== (n = a.charCodeAt(s))))
                return !1;
              if ((s++, c++, 117 !== (n = a.charCodeAt(s)))) return !1;
              if ((s++, c++, 101 !== (n = a.charCodeAt(s)))) return !1;
              s++, c++;
            } else if (102 === n) {
              if (((t.type = 10), s++, c++, 97 !== (n = a.charCodeAt(s))))
                return !1;
              if ((s++, c++, 108 !== (n = a.charCodeAt(s)))) return !1;
              if ((s++, c++, 115 !== (n = a.charCodeAt(s)))) return !1;
              if ((s++, c++, 101 !== (n = a.charCodeAt(s)))) return !1;
              s++, c++;
            } else
              for (t.type = 11; ; ) {
                if (s >= o) return !1;
                if (
                  !(
                    46 === (n = a.charCodeAt(s)) ||
                    (n >= 48 && n <= 57) ||
                    101 === n ||
                    69 === n ||
                    45 === n ||
                    43 === n
                  )
                )
                  break;
                s++, c++;
              }
            return (
              (t.len = s - t.offset),
              null === t.value && (t.value = a.substr(t.offset, t.len)),
              (e.pos = s),
              (e.line = i),
              (e.char = c),
              !0
            );
          }
        },
        function (e, t, n) {
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = function (e, t, n, r, a, s) {
            (this.scope = e),
              (this.parentScopes = t),
              (this.index = n),
              (this.fontStyle = r),
              (this.foreground = a),
              (this.background = s);
          };
          function a(e) {
            return !!(
              /^#[0-9a-f]{6}$/i.test(e) ||
              /^#[0-9a-f]{8}$/i.test(e) ||
              /^#[0-9a-f]{3}$/i.test(e) ||
              /^#[0-9a-f]{4}$/i.test(e)
            );
          }
          function s(e) {
            if (!e) return [];
            if (!e.settings || !Array.isArray(e.settings)) return [];
            for (
              var t = e.settings, n = [], s = 0, o = 0, i = t.length;
              o < i;
              o++
            ) {
              var c = t[o];
              if (c.settings) {
                var u = void 0;
                u =
                  "string" == typeof c.scope
                    ? c.scope.replace(/^[,]+/, "").replace(/[,]+$/, "").split(",")
                    : Array.isArray(c.scope)
                    ? c.scope
                    : [""];
                var l = -1;
                if ("string" == typeof c.settings.fontStyle) {
                  l = 0;
                  for (
                    var p = 0, h = (g = c.settings.fontStyle.split(" ")).length;
                    p < h;
                    p++
                  )
                    switch (g[p]) {
                      case "italic":
                        l |= 1;
                        break;
                      case "bold":
                        l |= 2;
                        break;
                      case "underline":
                        l |= 4;
                    }
                }
                var d = null;
                "string" == typeof c.settings.foreground &&
                  a(c.settings.foreground) &&
                  (d = c.settings.foreground);
                var f = null;
                for (
                  "string" == typeof c.settings.background &&
                    a(c.settings.background) &&
                    (f = c.settings.background),
                    p = 0,
                    h = u.length;
                  p < h;
                  p++
                ) {
                  var g,
                    m = (g = u[p].trim().split(" "))[g.length - 1],
                    _ = null;
                  g.length > 1 && (_ = g.slice(0, g.length - 1)).reverse(),
                    (n[s++] = new r(m, _, o, l, d, f));
                }
              }
            }
            return n;
          }
          function o(e, t) {
            e.sort(function (e, t) {
              var n = u(e.scope, t.scope);
              return 0 !== n || 0 !== (n = l(e.parentScopes, t.parentScopes))
                ? n
                : e.index - t.index;
            });
            for (
              var n = 0, r = "#000000", a = "#ffffff";
              e.length >= 1 && "" === e[0].scope;
  
            ) {
              var s = e.shift();
              -1 !== s.fontStyle && (n = s.fontStyle),
                null !== s.foreground && (r = s.foreground),
                null !== s.background && (a = s.background);
            }
            for (
              var o = new i(t),
                d = new p(0, null, n, o.getId(r), o.getId(a)),
                f = new h(new p(0, null, -1, 0, 0), []),
                g = 0,
                m = e.length;
              g < m;
              g++
            ) {
              var _ = e[g];
              f.insert(
                0,
                _.scope,
                _.parentScopes,
                _.fontStyle,
                o.getId(_.foreground),
                o.getId(_.background)
              );
            }
            return new c(o, d, f);
          }
          (t.ParsedThemeRule = r), (t.parseTheme = s);
          var i = (function () {
            function e(e) {
              if (
                ((this._lastColorId = 0),
                (this._id2color = []),
                (this._color2id = Object.create(null)),
                Array.isArray(e))
              ) {
                this._isFrozen = !0;
                for (var t = 0, n = e.length; t < n; t++)
                  (this._color2id[e[t]] = t), (this._id2color[t] = e[t]);
              } else this._isFrozen = !1;
            }
            return (
              (e.prototype.getId = function (e) {
                if (null === e) return 0;
                e = e.toUpperCase();
                var t = this._color2id[e];
                if (t) return t;
                if (this._isFrozen)
                  throw new Error("Missing color in color map - " + e);
                return (
                  (t = ++this._lastColorId),
                  (this._color2id[e] = t),
                  (this._id2color[t] = e),
                  t
                );
              }),
              (e.prototype.getColorMap = function () {
                return this._id2color.slice(0);
              }),
              e
            );
          })();
          t.ColorMap = i;
          var c = (function () {
            function e(e, t, n) {
              (this._colorMap = e),
                (this._root = n),
                (this._defaults = t),
                (this._cache = {});
            }
            return (
              (e.createFromRawTheme = function (e, t) {
                return this.createFromParsedTheme(s(e), t);
              }),
              (e.createFromParsedTheme = function (e, t) {
                return o(e, t);
              }),
              (e.prototype.getColorMap = function () {
                return this._colorMap.getColorMap();
              }),
              (e.prototype.getDefaults = function () {
                return this._defaults;
              }),
              (e.prototype.match = function (e) {
                return (
                  this._cache.hasOwnProperty(e) ||
                    (this._cache[e] = this._root.match(e)),
                  this._cache[e]
                );
              }),
              e
            );
          })();
          function u(e, t) {
            return e < t ? -1 : e > t ? 1 : 0;
          }
          function l(e, t) {
            if (null === e && null === t) return 0;
            if (!e) return -1;
            if (!t) return 1;
            var n = e.length,
              r = t.length;
            if (n === r) {
              for (var a = 0; a < n; a++) {
                var s = u(e[a], t[a]);
                if (0 !== s) return s;
              }
              return 0;
            }
            return n - r;
          }
          (t.Theme = c), (t.strcmp = u), (t.strArrCmp = l);
          var p = (function () {
            function e(e, t, n, r, a) {
              (this.scopeDepth = e),
                (this.parentScopes = t),
                (this.fontStyle = n),
                (this.foreground = r),
                (this.background = a);
            }
            return (
              (e.prototype.clone = function () {
                return new e(
                  this.scopeDepth,
                  this.parentScopes,
                  this.fontStyle,
                  this.foreground,
                  this.background
                );
              }),
              (e.cloneArr = function (e) {
                for (var t = [], n = 0, r = e.length; n < r; n++)
                  t[n] = e[n].clone();
                return t;
              }),
              (e.prototype.acceptOverwrite = function (e, t, n, r) {
                this.scopeDepth > e
                  ? console.log("how did this happen?")
                  : (this.scopeDepth = e),
                  -1 !== t && (this.fontStyle = t),
                  0 !== n && (this.foreground = n),
                  0 !== r && (this.background = r);
              }),
              e
            );
          })();
          t.ThemeTrieElementRule = p;
          var h = (function () {
            function e(e, t, n) {
              void 0 === t && (t = []),
                void 0 === n && (n = {}),
                (this._mainRule = e),
                (this._rulesWithParentScopes = t),
                (this._children = n);
            }
            return (
              (e._sortBySpecificity = function (e) {
                return 1 === e.length || e.sort(this._cmpBySpecificity), e;
              }),
              (e._cmpBySpecificity = function (e, t) {
                if (e.scopeDepth === t.scopeDepth) {
                  var n = e.parentScopes,
                    r = t.parentScopes,
                    a = null === n ? 0 : n.length,
                    s = null === r ? 0 : r.length;
                  if (a === s)
                    for (var o = 0; o < a; o++) {
                      var i = n[o].length,
                        c = r[o].length;
                      if (i !== c) return c - i;
                    }
                  return s - a;
                }
                return t.scopeDepth - e.scopeDepth;
              }),
              (e.prototype.match = function (t) {
                if ("" === t)
                  return e._sortBySpecificity(
                    [].concat(this._mainRule).concat(this._rulesWithParentScopes)
                  );
                var n,
                  r,
                  a = t.indexOf(".");
                return (
                  -1 === a
                    ? ((n = t), (r = ""))
                    : ((n = t.substring(0, a)), (r = t.substring(a + 1))),
                  this._children.hasOwnProperty(n)
                    ? this._children[n].match(r)
                    : e._sortBySpecificity(
                        []
                          .concat(this._mainRule)
                          .concat(this._rulesWithParentScopes)
                      )
                );
              }),
              (e.prototype.insert = function (t, n, r, a, s, o) {
                if ("" !== n) {
                  var i,
                    c,
                    u,
                    l = n.indexOf(".");
                  -1 === l
                    ? ((i = n), (c = ""))
                    : ((i = n.substring(0, l)), (c = n.substring(l + 1))),
                    this._children.hasOwnProperty(i)
                      ? (u = this._children[i])
                      : ((u = new e(
                          this._mainRule.clone(),
                          p.cloneArr(this._rulesWithParentScopes)
                        )),
                        (this._children[i] = u)),
                    u.insert(t + 1, c, r, a, s, o);
                } else this._doInsertHere(t, r, a, s, o);
              }),
              (e.prototype._doInsertHere = function (e, t, n, r, a) {
                if (null !== t) {
                  for (
                    var s = 0, o = this._rulesWithParentScopes.length;
                    s < o;
                    s++
                  ) {
                    var i = this._rulesWithParentScopes[s];
                    if (0 === l(i.parentScopes, t))
                      return void i.acceptOverwrite(e, n, r, a);
                  }
                  -1 === n && (n = this._mainRule.fontStyle),
                    0 === r && (r = this._mainRule.foreground),
                    0 === a && (a = this._mainRule.background),
                    this._rulesWithParentScopes.push(new p(e, t, n, r, a));
                } else this._mainRule.acceptOverwrite(e, n, r, a);
              }),
              e
            );
          })();
          t.ThemeTrieElement = h;
        },
      ]);
    })(P);
    const M = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    class E extends P.exports.Registry {
      constructor(e) {
        super(e),
          (this._resolver = e),
          (this.themesPath = "themes/"),
          (this._resolvedThemes = {}),
          (this._resolvedGrammars = {});
      }
      getTheme(e) {
        return "string" == typeof e ? this._resolvedThemes[e] : e;
      }
      async loadTheme(e) {
        return "string" == typeof e
          ? (this._resolvedThemes[e] ||
              (this._resolvedThemes[e] = await L(`${this.themesPath}${e}.json`)),
            this._resolvedThemes[e])
          : ((e = w(e)).name && (this._resolvedThemes[e.name] = e), e);
      }
      async loadThemes(e) {
        return await Promise.all(e.map((e) => this.loadTheme(e)));
      }
      getLoadedThemes() {
        return Object.keys(this._resolvedThemes);
      }
      getGrammar(e) {
        return this._resolvedGrammars[e];
      }
      async loadLanguage(e) {
        const t = await this.loadGrammar(e.scopeName);
        (this._resolvedGrammars[e.id] = t),
          e.aliases &&
            e.aliases.forEach((e) => {
              this._resolvedGrammars[e] = t;
            });
      }
      async loadLanguages(e) {
        for (const t of e) this._resolver.addLanguage(t);
        for (const t of e) await this.loadLanguage(t);
      }
      getLoadedLanguages() {
        return Object.keys(this._resolvedGrammars);
      }
    }
    function D(e) {
      return "string" == typeof e
        ? t.find((t) => {
            var n;
            return (
              t.id === e ||
              (null === (n = t.aliases) || void 0 === n ? void 0 : n.includes(e))
            );
          })
        : e;
    }
    (e.BUNDLED_LANGUAGES = t),
      (e.BUNDLED_THEMES = [
        "css-variables",
        "dark-plus",
        "dracula-soft",
        "dracula",
        "github-dark-dimmed",
        "github-dark",
        "github-light",
        "light-plus",
        "material-darker",
        "material-default",
        "material-lighter",
        "material-ocean",
        "material-palenight",
        "min-dark",
        "min-light",
        "monokai",
        "nord",
        "one-dark-pro",
        "poimandres",
        "rose-pine-dawn",
        "rose-pine-moon",
        "rose-pine",
        "slack-dark",
        "slack-ochin",
        "solarized-dark",
        "solarized-light",
        "vitesse-dark",
        "vitesse-light",
      ]),
      (e.getHighlighter = async function (e) {
        var n, a;
        const { _languages: s, _themes: o } = (function (e) {
            var n;
            let r = t,
              a = e.themes || [];
            return (
              (null === (n = e.langs) || void 0 === n ? void 0 : n.length) &&
                (r = e.langs.map(D)),
              e.theme && a.unshift(e.theme),
              a.length || (a = ["nord"]),
              { _languages: r, _themes: a }
            );
          })(e),
          i = new x(
            (async function () {
              if (!v) {
                let e;
                if (g)
                  e =
                    "string" == typeof _
                      ? u.exports.loadWASM({
                          data: await fetch(b("dist/onig.wasm")).then((e) =>
                            e.arrayBuffer()
                          ),
                        })
                      : u.exports.loadWASM(_);
                else {
                  const t = require("path").join(
                      require.resolve("vscode-oniguruma"),
                      "../onig.wasm"
                    ),
                    n = require("fs").readFileSync(t).buffer;
                  e = u.exports.loadWASM(n);
                }
                v = e.then(() => ({
                  createOnigScanner: (e) => u.exports.createOnigScanner(e),
                  createOnigString: (e) => u.exports.createOnigString(e),
                }));
              }
              return v;
            })(),
            "vscode-oniguruma"
          ),
          c = new E(i);
        (null === (n = e.paths) || void 0 === n ? void 0 : n.themes) &&
          (c.themesPath = e.paths.themes),
          (null === (a = e.paths) || void 0 === a ? void 0 : a.languages) &&
            (i.languagesPath = e.paths.languages);
        const l = (await c.loadThemes(o))[0];
        let p;
        await c.loadLanguages(s);
        const h = {
          "#000001": "var(--shiki-color-text)",
          "#000002": "var(--shiki-color-background)",
          "#000004": "var(--shiki-token-constant)",
          "#000005": "var(--shiki-token-string)",
          "#000006": "var(--shiki-token-comment)",
          "#000007": "var(--shiki-token-keyword)",
          "#000008": "var(--shiki-token-parameter)",
          "#000009": "var(--shiki-token-function)",
          "#000010": "var(--shiki-token-string-expression)",
          "#000011": "var(--shiki-token-punctuation)",
          "#000012": "var(--shiki-token-link)",
        };
        function d(e) {
          const t = e ? c.getTheme(e) : l;
          if (!t) throw Error(`No theme registration for ${e}`);
          (p && p.name === t.name) || (c.setTheme(t), (p = t));
          const n = c.getColorMap();
          return (
            "css-variables" === t.name &&
              (function (e, t) {
                (e.bg = h[e.bg] || e.bg),
                  (e.fg = h[e.fg] || e.fg),
                  t.forEach((e, n) => {
                    t[n] = h[e] || e;
                  });
              })(t, n),
            { _theme: t, _colorMap: n }
          );
        }
        function f(e, t = "text", n, a = { includeExplanation: !0 }) {
          if (
            (function (e) {
              return !e || ["plaintext", "txt", "text"].includes(e);
            })(t)
          ) {
            return [...e.split(/\r\n|\r|\n/).map((e) => [{ content: e }])];
          }
          const { _grammar: s } = (function (e) {
              const t = c.getGrammar(e);
              if (!t) throw Error(`No language registration for ${e}`);
              return { _grammar: t };
            })(t),
            { _theme: o, _colorMap: i } = d(n);
          return (function (e, t, n, a, s) {
            let o = n.split(/\r\n|\r|\n/),
              i = P.exports.INITIAL,
              c = [],
              u = [];
            for (let n = 0, l = o.length; n < l; n++) {
              let l,
                p,
                h,
                d = o[n];
              if ("" === d) {
                (c = []), u.push([]);
                continue;
              }
              s.includeExplanation &&
                ((l = a.tokenizeLine(d, i)), (p = l.tokens), (h = 0));
              let f = a.tokenizeLine2(d, i),
                g = f.tokens.length / 2;
              for (let n = 0; n < g; n++) {
                let a = f.tokens[2 * n],
                  o = n + 1 < g ? f.tokens[2 * n + 2] : d.length;
                if (a === o) continue;
                let i = f.tokens[2 * n + 1],
                  u = t[r.getForeground(i)],
                  l = r.getFontStyle(i),
                  m = [];
                if (s.includeExplanation) {
                  let t = 0;
                  for (; a + t < o; ) {
                    let n = p[h],
                      r = d.substring(n.startIndex, n.endIndex);
                    (t += r.length),
                      m.push({ content: r, scopes: T(e, n.scopes) }),
                      h++;
                  }
                }
                c.push({
                  content: d.substring(a, o),
                  color: u,
                  fontStyle: l,
                  explanation: m,
                });
              }
              u.push(c), (c = []), (i = f.ruleStack);
            }
            return u;
          })(o, i, e, s, a);
        }
        return {
          codeToThemedTokens: f,
          codeToHtml: function (e, t = "text", n) {
            let r;
            r = "object" == typeof t ? t : { lang: t, theme: n };
            const a = f(e, r.lang, r.theme, { includeExplanation: !1 }),
              { _theme: s } = d(r.theme);
            return O(a, {
              fg: s.fg,
              bg: s.bg,
              lineOptions: null == r ? void 0 : r.lineOptions,
            });
          },
          getTheme: (e) => d(e)._theme,
          loadTheme: async function (e) {
            await c.loadTheme(e);
          },
          loadLanguage: async function (e) {
            const t = D(e);
            i.addLanguage(t), await c.loadLanguage(t);
          },
          getBackgroundColor: function (e) {
            const { _theme: t } = d(e);
            return t.bg;
          },
          getForegroundColor: function (e) {
            const { _theme: t } = d(e);
            return t.fg;
          },
          getLoadedThemes: function () {
            return c.getLoadedThemes();
          },
          getLoadedLanguages: function () {
            return c.getLoadedLanguages();
          },
        };
      }),
      (e.loadTheme = L),
      (e.renderToHtml = O),
      (e.setCDN = function (e) {
        m = e;
      }),
      (e.setOnigasmWASM = function (e) {
        y(e);
      }),
      (e.setWasm = y),
      (e.toShikiTheme = w),
      Object.defineProperty(e, "__esModule", { value: !0 });
  })((this.shiki = this.shiki || {}));
  