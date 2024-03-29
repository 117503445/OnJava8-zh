#!/usr/bin/env python3

files = [
    "preface.md",
    "introduction.md",
    "ch1.md",
    "ch2.md",
    "ch3.md",
    "ch4.md",
    "ch5.md",
    "ch6.md",
    "ch7.md",
    "ch8.md",
    "ch9.md",
    "ch10.md",
    "ch11.md",
    "ch12.md",
    "ch13.md",
    "ch14.md",
    "ch15.md",
    "ch16.md",
    "ch17.md",
    "ch18.md",
    "ch19.md",
    "ch20.md",
    "ch21.md",
    "ch22.md",
    "ch23.md",
    "ch24.md",
    "ch25.md",
    "appendices/app-supplements.md",
    "appendices/app-programming-guidelines.md",
    "appendices/app-javadoc.md",
    "appendices/app-passing-and-returning-objects.md",
    "appendices/app-io-streams.md",
    "appendices/app-standard-io.md",
    "appendices/app-new-io.md",
    "appendices/app-understanding-equals-and-hashcode.md",
    "appendices/app-collection-topics.md",
    "appendices/app-low-level-concurrency.md",
    "appendices/app-data-compression.md",
    "appendices/app-object-serialization.md",
    "appendices/app-benefits-and-costs-of-static-type-checking.md",
    "appendices/app-the-positive-legacy-of-c-plus-plus-and-java.md",
    "appendices/app-becoming-a-programmer.md",
]

from pathlib import Path

def main():
    for f in files:
        t = Path(f).read_text()
        t = t.splitlines()[0].replace("# ", "")
        f = f.replace(".md", "")
        print('{' + f" text: '{t}', link: '/{f}' "+ '},')
        


if __name__ == '__main__':
    main()