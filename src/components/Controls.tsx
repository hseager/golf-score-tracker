import React from 'react'

type ControlProps = {
  holes: number
  setHoles: Function
}

const Controls = ({ holes, setHoles }: ControlProps) => {
  return (
    <div>
      <label>Holes</label>
      <input
        type="number"
        value={holes}
        onChange={(e) => setHoles(e.target.value)}
        min={1}
        max={18}
      />
    </div>
  )
}

export default Controls
