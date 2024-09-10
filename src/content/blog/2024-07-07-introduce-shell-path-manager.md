---
pubDatetime: 2024-07-07T10:26:00.000+08:00
title: Introduce Shell Path Manager
featured: true
tags: 
  - blog
description: Let me introduce Shell Path Manager, a small tool to you
---

[Shell Path Manager](https://github.com/barnett617/shell-path-manager) is a simple and intuitive tool for managing shell path.

I want to develop this tool because I got the problem about managing the PATH on my mac each time after I install something, when I install [Go](https://go.dev/), when I install [yarn](https://yarnpkg.com/) etc. But I didn't find any handy tools to satisfy my needs.

This tool is just for simplifying some staff like `export $PATH:some-new-path` or `vi ~/.zshrc`, adding something and `source ~/.zshrc` or restart the terminal.

Some binary tools may auto do this for you but some others don't. I think they can do this but they don't have to, so programmers still have to manager shell environment themselves in the end.

But I think it's a burden for me to do these things each time when I install something, especially as a frontend developer, I just want to install some CLI tools which just used as a binary to create something.

So, I made it.

It makes me easier for some misc staff and I hope it will decrease the complexity for new frontend developers or amateurs.

If it helps you too or any questions, just contact me and pull requests are welcome.

> <https://github.com/barnett617/shell-path-manager>

## Installation

```bash
curl -fsSL https://raw.githubusercontent.com/barnett617/shell-path-manager/main/tools/install.sh | bash
```

Above shell script does these things:

- create .spm under user home
- create .spm/bin/spm and append ~/.spm/bin to PATH in order to invoke spm anywhere in shell
- create .spm/path

## Usage & How it works

```bash
spm list
```

This command just does one thing `cat ~/.spm/path`

```bash
spm add go=/Users/mac/go/bin
```

This command appends the input to ~/.spm/path

```bash
spm remove go
```

This will do following thing:

1. readline from ~/.spm/path
2. find the match key of the name to remove
3. delete the matched line
4. rewrite to ~/.spm/path

```bash
spm uninstall
```

This will not change your exist path but only remove all things about spm, which is `remove rm -rf ~/.spm`

## Why I made it

See [Learning Shell by Making a tool for myself](/posts/2024-07-12-learning-shell-by-making-a-tool-for-myself)

Some discussion about this pain

- <https://stackoverflow.com/questions/370047/what-is-the-most-elegant-way-to-remove-a-path-from-the-path-variable-in-bash>
- <https://stackoverflow.com/questions/273909/how-do-i-manipulate-path-elements-in-shell-scripts>

## Inspiration

There are some projects which I found when I want to decently manager my path before I made this.

- <https://github.com/gregory144/path-manager>
- <https://github.com/sindresorhus/shell-path>

## Some more things

AFAK Windows users can edit their paths via a visual window at least, so I don't have any plans to support this tool for Windows.

You may not have Node or proper version of Python on your computer, but you definitely have a shell, no matter Bash or Zsh, so this tool will suit for most Mac users.
