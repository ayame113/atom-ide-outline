import type { Pane } from "atom";

/** Handles the operation of opening and closing tabs. */
export class TabHandler<T extends object> {
  item: T | undefined;
  #onOpen: () => T;
  #onClose: (item: T) => void;
  constructor(
    { onOpen, onClose }: {
      /** Function called when creating a tab. Should return the pane item you want to add to the tab. */
      onOpen: () => T;
      /** Function called when a tab is destroyed. A pane item is passed as an argument. */
      onClose: (item: T) => void
    },
  ) {
    this.#onOpen = onOpen;
    this.#onClose = onClose;
  }
  /**
   * Toggle the tab.
   * If the tab exists, it will be deleted.
   * If the tab is open but hidden, the tab will be brought to the front.
   * If the tab does not exist, it will be created.
   */
  toggle() {
    const { state, targetPane } = this.#getState();
    if (state == "hidden") {
      this.#display({ targetPane });
    } else if (state == "noItem") {
      this.#create({ targetPane });
    } else {
      this.#destroy({ targetPane });
    }
  }
  /**
   * Show the tab.
   * If the tab is open but hidden, the tab will be brought to the front.
   * If the tab does not exist, it will be created.
   */
  show() {
    const { state, targetPane } = this.#getState();
    if (state == "hidden") {
      this.#display({ targetPane });
    } else if (state == "noItem") {
      this.#create({ targetPane });
    }
  }
  /**
   * Delete the tab.
   * If the tab exists, it will be deleted.
   */
  delete() {
    const targetPane = this.item && atom.workspace.paneForItem(this.item);
    if (targetPane) {
      this.#destroy({ targetPane });
    }
  }
  /** Display the hidden tab at target pane. */
  #display({ targetPane }: { targetPane: Pane }) {
    this.item && targetPane.activateItem(this.item);
    const dock = atom.workspace.getPaneContainers().find((v) =>
      v.getPanes().includes(targetPane)
    );
    dock && "show" in dock && dock.show();
  }
  /** Create the new tab at target pane. */
  #create({ targetPane }: { targetPane: Pane }) {
    this.item = this.#onOpen();
    targetPane.addItem(this.item);
    targetPane.activateItem(this.item);
    atom.workspace.getRightDock().show();
  }
  /** Destroy the tab from target pane. */
  #destroy({ targetPane }: { targetPane: Pane }) {
    if (this.item) {
      this.#onClose(this.item);
      targetPane.destroyItem(this.item);
    }
  }
  /** Get the state of the tab. */
  #getState() {
    const pane = this.item && atom.workspace.paneForItem(this.item);
    if (pane) {
      if (
        pane.getActiveItem() === this.item &&
        // @ts-ignore (getVisiblePanes is not includes typedef)
        atom.workspace.getVisiblePanes().includes(pane)
      ) {
        return { state: "visible", targetPane: pane } as const;
      } else {
        return { state: "hidden", targetPane: pane } as const;
      }
    } else {
      return {
        state: "noItem",
        targetPane: atom.workspace.getRightDock().getActivePane(),
      } as const;
    }
  }
}