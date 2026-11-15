# Roboto Flex (self-hosted)

Vendored so the `TextPressure` React Bits component stops reaching a third party
at runtime. No other part of the site uses this family; the UHIS type stack is
Peyda -> Vazirmatn.

- Upstream stylesheet: `https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&display=swap`
- Font files: `https://fonts.gstatic.com/s/robotoflex/v31/...` (variable, `opsz` 8-144, `wdth` 25-151, `wght` 100-1000)
- `roboto-flex.css` is that stylesheet with every `src` rewritten to a local path; subsets and `unicode-range` values are unchanged.
- Licence: SIL Open Font License 1.1, Copyright 2011 The Roboto Flex Project Authors. See `OFL.txt`.
