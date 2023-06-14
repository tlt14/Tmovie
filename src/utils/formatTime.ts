export  function formatTime(timestamp:string) {
    const now = new Date();
    const diff = now.getTime() - Date.parse(timestamp);
    if (diff < 60000) {
      return "just now";
    } else if (diff < 3600000) {
      const minutesAgo = Math.floor(diff / 60000);
      return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
    } else {
      const hoursAgo = Math.floor(diff / 3600000);
      return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
    }
  }
  