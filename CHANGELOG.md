## 2026-06-15

### Added

- Added project management files: `STATUS.md`, `TODO.md`, and `CHANGELOG.md`.
- Added handover notes for the current unpublished People page preview.
- Sent profile-information request emails to current M13/M14 lab members and saved a sent-copy record in `Knowledge/EmailDrafts`.
- Added thesis titles and cohort labels for M06-M12 alumni.
- Recorded first two member profile replies from 賴慎徽 and 陳易唯 in project status.
- Added 賴慎徽 Shen Hui Lai and 陳易唯 Yi-Wei Chen to the Current Team section.
- Added 賴慎徽's photo at `public/images/shen-hui-lai.jpg`.
- Added a saved copy of email replies sent to 賴慎徽 and 陳易唯 with the public People page link.
- Added 朱婕寧 Chieh-Ning Chu's polished profile information to the local Current Team data.
- Added M12 alumnus 顏翊丞 with thesis title to the local alumni list.
- Added conference labels to matched member/alumni profiles based on `src/data/publications.json` author matches.

### Changed

- Replaced the temporary status note with the standard project handover format.
- Changed the alumni section from large profile cards to a compact cohort-grouped list.
- Corrected the M09 voice-recognition thesis entry by merging `邵哲豪` into the existing alumnus `胡哲豪 Michael`.
- Changed the Current Team heading to include students.
- Corrected alumni display names from 莊識諭/賴章婷/鄒育呈/游亞榮 to 莊識錡/賴韋婷/鄒宥呈/游亞燊.

### Fixed

- Published the updated source to `main` and deployed the static site to `gh-pages`.
- Verified that the public People page and 賴慎徽 photo URL are live.
- Fixed a duplicate/misnamed alumni entry in the M09 cohort.
- Published the 朱婕寧 / 顏翊丞 / alumni-name-correction update to `main` and `gh-pages`.
- Sent 朱婕寧 a reply email with the public People page link.

### Removed

- Nothing.

## 2026-06-16

### Added

- Added `src/data/inServiceStudents.json` for professional master's program status tracking.
- Added the ORCA AUV / SAUVC 2026 finals news item with a CNA source link.
- Added a Professional Master's Programs section to the People page.
- Added graduated in-service student markers for 鄒宥呈, 賴國銘, and 李念謙.
- Added current in-service student groups for proposal defense completed and proposal pending.
- Added Degree Program of Applied Science and Technology metadata for 李念謙 and 戴立明.
- Added tabs to the People page for Current Team, Professional Master's Students, and Alumni.
- Added tabs to the Publications page for Journals, Conferences, Patents, and Books & Chapters.
- Added Dylan's email and LinkedIn to the PI profile card.
- Added proposal titles and keyword tags for the 7 proposal-defense-completed professional master's students.

### Changed

- Filtered current in-service students out of the Alumni rendering to avoid showing them as both current and alumni.
- Added responsive styling for the in-service program list and alumni in-service badges.
- Hid dropped members Yogesh Maheshbhai Patel and 葉權緯 from website rendering while keeping their source records.
- Changed the public lab contact email to `yoshi.imlab@gmail.com`.
- Changed news titles with URLs to render as external links.
- Removed draft/helper text from the Publications page title area and Contact page Public Profiles card.

### Fixed

- Verified the new data file with `jq`.
- Verified the People page build in `/tmp/imlab-yoshinas-preview`, since the NAS working tree dependency install was unavailable.
- Verified rendered People HTML includes the new tab controls and excludes dropped members.
- Verified rendered Publications HTML includes the new tab controls and that homepage featured publications remain untabbed.
- Verified Contact page and footer render `yoshi.imlab@gmail.com`.
- Verified People page renders Dylan's email and LinkedIn links.
- Verified Publications and Contact helper text are absent from rendered preview HTML.
- Verified each proposal-defense-completed professional master's student has proposal metadata in the rendered People page preview.
- Published the source update to `main` and deployed the static site to `gh-pages`.
- Fixed URL-less profile labels so they render as text badges instead of broken anchors.

### Removed

- Nothing.

## 2026-06-17

### Added

- Added placeholder Current Team profiles for Tang Shiqi, Luo Yuwen, Lee Kuan-Ting, Wang Shihan, Lan Yilun, and Huang Shixuan.

### Changed

- Changed the People page template to skip empty interest/tag rows for sparse placeholder profiles.

### Fixed

- Verified `src/data/people.json` with `jq`.
- Verified the People page build in `/tmp/imlab-yoshinas-preview`, since the NAS working tree dependency install still lacks `astro`.
- Verified rendered People HTML includes all six placeholder profiles.

### Removed

- Nothing.

## 2026-06-18

### Added

- Added handover notes for the approved placeholder-profile deployment and the OpenAI/Gemini model-context issue.
- Added the reliable local-temp preview/build workflow for environments where YoshiNAS npm installs fail.

### Changed

- Updated `STATUS.md` with the latest source commit `8544048` and deploy commit `2786642`.
- Replaced stale local preview URLs with the current public People page and a note that no persistent local preview is running.

### Fixed

- Published the placeholder-profile version to `gh-pages`.
- Verified the live public People page shows Tang Shiqi, Luo Yuwen, Lee Kuan-Ting, Wang Shihan, Lan Yilun, and Huang Shixuan.
- Documented that direct npm installs in the YoshiNAS checkout can fail because the mount does not support npm `.bin` symlinks and can trigger Astro/esbuild install failures.

### Removed

- Removed the completed pending task to review post-publication pages after deployment propagation.

## 2026-06-21

### Added

- Added Lee Kuan-Ting's provided profile details, including Design and Manufacturing Division affiliation, robot vision and intelligent automation bio, research interests, and email link.

### Changed

- Replaced Lee Kuan-Ting's sparse placeholder Current Team profile.
- Removed Lee Kuan-Ting from the placeholder-profile follow-up list.

### Fixed

- Verified `src/data/people.json` with `jq`.
- Verified the People page build in `/tmp/imlab-website-preview-1781779805`.
- Published the Lee Kuan-Ting profile update to `main` and `gh-pages`.
- Verified the live public People page renders Lee Kuan-Ting's updated profile.

### Removed

- Nothing.
