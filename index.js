// Twitter DOM Code to unlike tweets
setInterval(() => {
  if (document.querySelector('[data-testid="unlike"]')) {
    document.querySelector('[data-testid="unlike"]').scrollIntoView();
    document.querySelector('[data-testid="unlike"]').click();
  }
}, 1);

// Twitter code to unfollow followers
setInterval(() => {
  if (document.querySelector('[data-testid*="unfollow"]')) {
    document.querySelector('[data-testid*="unfollow"]').click();
    document.querySelector('[data-testid="confirmationSheetConfirm"]').click();
    document.querySelector('[data-testid*="unfollow"]').scrollIntoView();
  }
}, 1);

// Twitter code to follow people
setInterval(() => {
  if (document.querySelector('[data-testid*="-follow"]')) {
    document.querySelector('[data-testid*="-follow"]').click();
    document.querySelector('[data-testid*="-follow"]').scrollIntoView();
  }
}, 1);

// Twitter DOM Code to like tweets
setInterval(() => {
  if (document.querySelector('[data-testid="like"]')) {
    document.querySelector('[data-testid="like"]').scrollIntoView();
    document.querySelector('[data-testid="like"]').click();
  }
}, 1);

// Twitter code to delete media
setInterval(() => {
  document.querySelector('[data-testid="caret"]').click();
  document.querySelector('[role="menuitem"]').click();
  document.querySelector('[data-testid="confirmationSheetConfirm"]').click();
  document.querySelector('[data-testid="caret"]').scrollIntoView();
}, 1);
