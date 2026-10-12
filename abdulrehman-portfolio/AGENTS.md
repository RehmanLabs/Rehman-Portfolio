<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep Home, Work, About, and individual project case studies as separate routes with a shared root shell, because visitors need direct, shareable page navigation.
- Use bundled image assets and label invented project case studies as concepts, because illustrative work must not imply real client engagements.
- Keep concept content in a shared typed data module and filtering client-side, because the portfolio does not require persisted application data.
- Store only the visitor’s theme preference in browser storage and apply it after hydration, because it is a device preference rather than business data.
