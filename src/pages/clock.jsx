import { useEffect, useState } from 'react';

export function Clock() {
  const [deviceTime, setDeviceTime] = useState(new Date());

  function refreshDate() {
    setDeviceTime(new Date());
  }

  useEffect(() => {
    const intervalIndex = setInterval(refreshDate, 1000);

    // this is clearing the interval
    return () => {
      clearInterval(intervalIndex);
    };
  }, []);

  return (
    <div className="p-5">
      <h1>Clock:{deviceTime.toLocaleString()}</h1>
    </div>
  );
}
