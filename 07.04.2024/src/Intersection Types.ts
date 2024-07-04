type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable

let textbox: UIWidget = {
    drag: () => {},
    resize: () => {}   
}