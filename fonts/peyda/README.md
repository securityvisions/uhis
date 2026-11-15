# Peyda (commercial font)

The `.woff2` files in this directory are **not** in version control.

Source on the design machine: `~/Personal/Iran-Fonts-Library/01-text/Peyda/web/`
(9 weights, `Peyda-*.woff2`). The family is a commercial product of Font Iran,
purchased for this project; see <https://fontiran.com/fonts/peyda>.

## Install locally

```bash
cp ~/Personal/Iran-Fonts-Library/01-text/Peyda/web/*.woff2 web/public/fonts/peyda/
```

## If the files are missing

The app still builds and runs: the `@font-face` stack resolves to Vazirmatn,
which is installed as a normal dependency. Do not commit the Peyda binaries.
