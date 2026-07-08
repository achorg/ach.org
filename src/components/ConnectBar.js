const faCalendarDays = `
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="icon" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-32c0-17.7 14.3-32 32-32zM64 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0z"></path>
  </svg>
`;

const faBluesky = `
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="icon" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026"></path>
  </svg>
`;

const faLinkedin = `
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="icon" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
  </svg>
`;

module.exports = () => {
  return `
    <div class="connect-bar">
      <div class="connect-bar-overlay">
        <div class="connect-bar-content boxed-regular">
          <h2>Connect with us</h2>
          <p>Join our community listserv (<a href="mailto:community@ach.org">community@ach.org</a>) for DH news, jobs, and announcements &mdash; or find us around the web.</p>

          <div class="connect-bar-actions">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdW8qBGymk-hkKcU0pONMJ3Oi4y9tJDi7Vxg2rNyGpbi1TwCQ/viewform"
              class="button-pill"
            >Join our listserv</a>

            <div class="connect-bar-socials">
              <a href="/conferences/" title="Events">${faCalendarDays}</a>
              <a href="https://bsky.app/profile/ach.bsky.social" target="_blank" rel="noreferrer" title="Bluesky">${faBluesky}</a>
              <a href="https://www.linkedin.com/company/association-for-computing-and-the-humanities/" target="_blank" rel="noreferrer" title="LinkedIn">${faLinkedin}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
