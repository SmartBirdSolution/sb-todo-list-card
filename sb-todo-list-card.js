class SbTodoListCard extends HTMLElement {

    setConfig(config) {
        this.config = config;
        this.attachShadow({ mode: "open" });

        const style = document.createElement("style");
        style.textContent = `
          /* BUTTONS */
          .sb-button {
            background: var(--primary-color);
            color: white;
            padding: 0.5em 1em;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          .sb-button:hover {
            opacity: 0.9;
          }

          .sb-button-danger {
            color: var(--error-color, #FF2400);
            background: none;
            border: none;
            cursor: pointer;
            font-size: 0.9em;      
            padding: 0.3em;       
          }

          /* INPUTS */
          .sb-input {
            width: 100%;
            padding: 0.6em 0.8em;
            font-size: 1em;
            border: 1px solid var(--divider-color, #ccc);
            border-radius: 4px;
            background: var(--mdc-select-fill-color, #f5f5f5);
            color: var(--primary-text-color, #000);
            box-sizing: border-box;
            transition: border-color 0.2s ease;
          }

          .sb-input:focus {
            border-color: var(--mdc-theme-primary, var(--primary-color, #6200ee));
            outline: none;
          }

          .sb-row {
            display: flex;
            gap: 0.5em;
            margin-bottom: 1em;
          }

          .sb-row.vertical {
            flex-direction: column;
          }

          .sb-label {
            font-size: 0.9em;
            color: var(--secondary-text-color, #666);
            margin-bottom: 0.2em;
          }

          .sb-checkbox-row {
            display: flex;
            align-items: center;
            gap: 0.5em;
          }

          .sb-select {
            padding: 0.5em;
            border: 1px solid var(--divider-color, #ccc);
            border-radius: 4px;
            background: var(--divider-color, #ccc);
            font-size: 1em;
            color: var(--primary-text-color, #000);
            transition: background 0.3s ease;
          }

          .sb-select:hover,
          .sb-select:focus {
            background: var(--divider-color, #ccc);
            outline: none;
            border-color: var(--mdc-theme-primary, #6200ee);
          }

          .sb-select option {
            background: #3b3b3b;
            color: var(--primary-text-color, #000); /* Explicit text color */
          }
          .sb-select:disabled,
          .sb-input:disabled {
            background: var(--input-disabled-fill-color, #3a3a3a);
            color: var(--disabled-text-color, #999);
            cursor: not-allowed;
          }

        .checkbox-wrapper-46 input[type="checkbox"] {
          display: none;
          visibility: hidden;
        }
        .checkbox-wrapper-46 .cbx {
          margin: auto;
          user-select: none;
          cursor: pointer;
        }
        .checkbox-wrapper-46 .cbx span {
          display: inline-block;
          vertical-align: middle;
          transform: translate3d(0, 0, 0);
        }
        .checkbox-wrapper-46 .cbx span:first-child {
          position: relative;
          width: 18px;
          height: 18px;
          border-radius: 3px;
          transform: scale(1);
          vertical-align: middle;
          border: 1px solid #9098A9;
          transition: all 0.2s ease;
        }
        .checkbox-wrapper-46 .cbx span:first-child svg {
          position: absolute;
          top: 3px;
          left: 2px;
          fill: none;
          stroke: #FFFFFF;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 16px;
          stroke-dashoffset: 16px;
          transition: all 0.3s ease;
          transition-delay: 0.1s;
          transform: translate3d(0, 0, 0);
        }
        .checkbox-wrapper-46 .cbx span:first-child:before {
          content: "";
          width: 100%;
          height: 100%;
          background: #03a9f4;
          display: block;
          transform: scale(0);
          opacity: 1;
          border-radius: 50%;
        }
        .checkbox-wrapper-46 .cbx span:last-child {
          padding-left: 8px;
        }
        .checkbox-wrapper-46 .cbx:hover span:first-child {
          border-color: #03a9f4;
        }
        .checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child {
          background: #03a9f4;
          border-color: #03a9f4;
          animation: wave-46 0.4s ease;
        }
        .checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child svg {
          stroke-dashoffset: 0;
        }
        .checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child:before {
          transform: scale(3.5);
          opacity: 0;
          transition: all 0.6s ease;
        }
        // @keyframes wave-46 {
        // 50% {
        //     transform: scale(0.9);
        // }
        }

        .sb-tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
        padding: 0.5em 1em;
        border-bottom: 1px solid #ccc;
        flex-shrink: 0; /* tabs height fixed to content */
        }

        /* Tab buttons */
        .sb-tab-button {
          display: flex;
          align-items: center;
          padding: 0.5em 1em;
          border: none;
          background: none;
          cursor: pointer;
          color: white;
          font-size: 1.2em;
          font-weight: normal;
          border-bottom: 2px solid transparent;
        }

        .sb-tab-button.selected {
          font-weight: bold;
          border-bottom: 2px solid var(--primary-color);
        }

          /* RESPONSIVE CARD WIDTH */
          ha-card {
            width: 90vw;
            max-width: 800px;
            min-width: 300px;
            height: 100%;
            margin: 0 auto;
          }

            .sb-card {
            display: flex;
            flex-direction: column;
            height: 800px; /* or use vh if you want viewport height */
            width: 100%;
            max-width: none;
            min-width: 300px;
            overflow: hidden; /* prevent card overflow */
            margin: 0 auto;
            box-sizing: border-box;
            }

            .content {
              flex: 1 1 auto;
              overflow-y: auto;
              padding: 1em;
              padding-bottom: 0; /* prevent it from pushing actions down */
              box-sizing: border-box;
              border-bottom: 1px solid #ccc;
            }

          .sb-clear-completed-container {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 50px; /* fits button height */
            padding: 0 1em;
          }

          .actions {
            display: flex;
            justify-content: center;
            gap: 1em;
            padding: 0 0.5em 3em 0.5em;
            background: var(--card-background-color, #000); /* ensure it blends with the card */
            flex-shrink: 0;
            box-sizing: border-box;
          
            /* Combine height of content + 1px border */
          }

          @media (max-width: 768px) {
            ha-card,
            .sb-card {
              height: 700px;         /* Full viewport height */
              overflow: hidden;      /* Prevent overflow */
              display: flex;
              width: 90vw;
              flex-direction: column;
            }

            .content {
              flex: 0 0 550px;         /* Fixed height for content */
              max-height: 60vh;
              overflow-y: auto;       /* Scrollable if needed */
              flex-direction: column;
              gap: 1em;
            }
          }
        `;

        this.shadowRoot.appendChild(style);
        this.selectedIndex = 0;

        this.card = document.createElement("ha-card");
        //   this.card.header = this.config.title || "Todo Lists";
        this.card.className = "sb-card";

        this.tabContainer = document.createElement("div");
        this.tabContainer.className = "sb-tabs";
        this.card.appendChild(this.tabContainer);

        this.content = document.createElement("div");
        this.content.className = "content";
        this.card.appendChild(this.content);

        this.listContainer = document.createElement("div");
        this.listContainer.style.flex = "1";
        this.content.appendChild(this.listContainer);

        this.clearCompletedContainer = document.createElement("div");
        this.clearCompletedContainer.className = "sb-clear-completed-container";
        // this.clearCompletedContainer.style.borderBottom = "1px solid #ccc";
        this.card.appendChild(this.clearCompletedContainer);


        //   // Create the line element
        //   this.separatorLine = document.createElement("div");
        //   this.separatorLine.style.position = "absolute";
        //   this.separatorLine.style.bottom = "calc(10% + 30px)";
        //   this.separatorLine.style.left = "0";
        //   this.separatorLine.style.width = "100%";
        //   this.separatorLine.style.height = "1px";
        //   this.separatorLine.style.backgroundColor = "white";
        //   this.separatorLine.style.opacity = "0.6";

        //   // Add the line to the card (same container as actions)
        //   this.card.appendChild(this.separatorLine);


        this.actions = document.createElement("div");
        this.actions.className = "actions";
        // this.actions.style.borderTop = "1px solid #ccc";
        this.card.appendChild(this.actions);

        this.shadowRoot.appendChild(this.card);

        this._renderAddListButton?.();
    }

    set hass(hass) {
        this._hass = hass;

        const entityIds = this.config.entities && Array.isArray(this.config.entities)
            ? this.config.entities
            : Object.keys(hass.states)
                .filter(id =>
                    id.startsWith("sb_todo.") &&
                    hass.states[id].state !== "unavailable"
                );

        this.entities = entityIds
            .map(eid => hass.states[eid])
            .filter(Boolean);

        // Always show tabs & action area, even if no entities
        this._renderTabs();
        this._renderSelectedListTasks();
        this._renderAddButton();
    }


    _renderTabs() {
        this.tabContainer.innerHTML = "";

        this.entities.forEach((entity, index) => {
            const tab = document.createElement("button");
            tab.className = "sb-tab-button" + (index === this.selectedIndex ? " selected" : "");

            // Use display name (friendly_name attribute) for label
            const labelSpan = document.createElement("span");
            labelSpan.textContent = entity.attributes.friendly_name || entity.entity_id;
            labelSpan.style.flex = "1";
            labelSpan.style.cursor = "pointer";

            labelSpan.addEventListener("dblclick", async (e) => {
                e.stopPropagation();
                // Use full entity_id for service call
                const entityId = entity.entity_id;
                const currentDisplayName = entity.attributes.friendly_name || entityId.split(".")[1];
                const newName = prompt(`Rename list "${currentDisplayName}" to:`);
                if (newName && newName !== currentDisplayName && confirm(`Rename list "${currentDisplayName}" to "${newName}"?`)) {
                    await this._hass.callService("sb_todo", "rename_list", {
                        entity_id: entityId,
                        new_name: newName.trim(),
                    });
                    setTimeout(() => this._refreshLists(), 500);
                }
            });

            tab.appendChild(labelSpan);

            tab.addEventListener("click", () => {
                this.selectedIndex = index;
                this._renderTabs();
                this._renderSelectedListTasks();
                this._renderAddButton();
            });

            // Delete button with confirmation
            const delBtn = document.createElement("button");
            delBtn.textContent = "✖";

            delBtn.title = `Delete list ${labelSpan.textContent}`;
            delBtn.className = 'sb-button-danger';
            // delBtn.style.marginLeft = "0.5em";
            // delBtn.style.color = "var(--error-color)";
            // delBtn.style.background = "none";
            // delBtn.style.border = "none";
            // delBtn.style.cursor = "pointer";

            delBtn.addEventListener("click", async (e) => {
                e.stopPropagation();
                const listId = entity.entity_id.split(".")[1];
                if (confirm(`Are you sure you want to delete list "${labelSpan.textContent}"?`)) {
                    await this._hass.callService("sb_todo", "delete_list", { name: listId });
                    setTimeout(() => this._refreshLists(), 500);
                }
            });

            tab.appendChild(delBtn);

            this.tabContainer.appendChild(tab);

        });
    }

    async _refreshLists() {
        this.entities = this.config.entities.map(eid => this._hass.states[eid]).filter(Boolean);
        if (this.selectedIndex >= this.entities.length) this.selectedIndex = 0;
        this._renderTabs();
        this._renderSelectedListTasks();
        this._renderAddButton();
    }

    _renderSelectedListTasks() {
        this.content.innerHTML = "";

        if (!this.entities.length) {
            this.content.textContent = "No todo lists available.";
            return;
        }

        const entity = this.entities[this.selectedIndex];
        if (!entity) return;

        const items = entity.attributes.todo_items || [];
        const activeTasks = items.filter(item => item.status !== "completed");
        const completedTasks = items.filter(item => item.status === "completed");

        const section = (titleText, tasks, isCompleted = false) => {
            const section = document.createElement("div");
            section.style.flex = "1";
            section.style.display = "flex";
            section.style.flexDirection = "column";

            const header = document.createElement("div");
            header.style.display = "flex";
            header.style.justifyContent = "space-between";
            header.style.alignItems = "center";

            const title = document.createElement("h3");
            title.textContent = titleText;
            header.appendChild(title);

            let toggleButton;
            let taskContainer = document.createElement("div");
            taskContainer.className = "completed-container";
            taskContainer.style.display = isCompleted && !this.showCompleted ? "none" : "block";

            if (isCompleted) {
                this.showCompleted = this.showCompleted ?? true;
                toggleButton = document.createElement("button");

                toggleButton.textContent = this.showCompleted ? "︽" : "︾";
                toggleButton.style.fontSize = "1.5em";
                toggleButton.style.padding = "0.2em 0.4em"; // small padding to prevent squishing
                toggleButton.style.flexShrink = "0";
                toggleButton.className = "sb-button";
                toggleButton.addEventListener("click", () => {
                    this.showCompleted = !this.showCompleted;
                    toggleButton.textContent = this.showCompleted ? "︽" : "︾";
                    this._renderSelectedListTasks();
                });
                header.appendChild(toggleButton);
            }

            section.appendChild(header);

            tasks.forEach(item => {
                const taskEl = this._renderTask(item, entity.entity_id);
                taskContainer.appendChild(taskEl);
            });

            // Add clear completed button inside completed section
            if (isCompleted && this.showCompleted && completedTasks.length > 0) {
                const clearCompletedBtn = document.createElement("button");
                clearCompletedBtn.textContent = "🧹 Clear Completed";
                clearCompletedBtn.className = 'sb-button';
                clearCompletedBtn.style.alignSelf = "center";
                clearCompletedBtn.style.marginTop = "1em";
                clearCompletedBtn.addEventListener("click", async () => {
                    if (confirm("Remove all completed items?")) {
                        await this._hass.callService("sb_todo", "remove_completed_items", {
                            entity_id: entity.entity_id,
                        });
                        setTimeout(() => this._refreshLists(), 500);
                    }
                });
                taskContainer.appendChild(clearCompletedBtn);
            }

            section.appendChild(taskContainer);
            return section;
        };

        this.content.appendChild(section("To Do", activeTasks));
        if (completedTasks.length > 0) {
            this.content.appendChild(section("Completed", completedTasks, true));
        }
    }



    _renderTask(item, entityId) {
        const line = document.createElement("div");
        line.style.marginBottom = "0.5em";
        line.style.border = "1px solid #ccc";
        line.style.borderRadius = "4px";
        line.style.padding = "0.5em";
        line.style.display = "flex";
        line.style.flexDirection = "column";
        line.style.background = "#2e2e2e"

        // 🔁 Background color based on due date
        if (item.due_datetime ) {
            const timestamp = item.due_datetime;
            const tsNum = Number(timestamp);
            const due = new Date(tsNum * 1000)
            const now = new Date();
            const diffMs = due.getTime() - now.getTime();
            const diffDays = diffMs / (1000 * 60 * 60 * 24);

            if (diffDays >= 3) {
                line.style.background = "#d4ffdd"; // green
                line.style.color = "#000"
            } else if (diffDays >= 0) {
                line.style.background = "#fff3cd"; // yellow
                line.style.color = "#000"
            } else {
                line.style.background = "#f8d7da"; // red
                line.style.color = "#000"
            }
        }

        // ===== TOP ROW: Delete - Name - Done Button =====
        const topRow = document.createElement("div");
        topRow.style.display = "flex";
        topRow.style.alignItems = "center";
        topRow.style.justifyContent = "space-between";

        // 🔴 Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "✖";
        deleteButton.title = `Delete item "${item.summary}"`;
        deleteButton.style.color = "var(--error-color, #FF2400)";
        deleteButton.style.background = "none";
        deleteButton.style.border = "none";
        deleteButton.style.cursor = "pointer";
        deleteButton.style.marginRight = "0.5em";
        deleteButton.style.fontSize = "1.5em";        // Increased size
        deleteButton.style.lineHeight = "1";          // Optional for alignment
        deleteButton.style.padding = "0.3em";         // Optional spacing
        deleteButton.style.alignSelf = "center";
        deleteButton.style.position = "relative";
        deleteButton.style.top = "1px";
        deleteButton.addEventListener("click", async () => {
            if (confirm(`Delete item "${item.summary}"?`)) {
                await this._hass.callService("sb_todo", "remove_item", {
                    entity_id: entityId,
                    item: item.uid || item.summary,
                });
                setTimeout(() => this._refreshLists(), 500);
            }
        });

        // 📝 Name text
        const name = document.createElement("div");
        name.style.flex = "1";
        name.style.textAlign = "center";
        name.style.wordBreak = "break-word";
        name.style.padding = "0 0.5em";
        name.style.cursor = "pointer";
        name.style.fontSize = "1.3em";
        name.textContent = item.summary;
        if (item.status === "completed") {
            name.style.textDecoration = "line-through";
            name.style.opacity = "0.6";
        }
        name.addEventListener("dblclick", () => this._showEditDialog(item, entityId));

        // ✅ Done / Undo button
        const checkboxWrapper = document.createElement("div");
        checkboxWrapper.className = "checkbox-wrapper-46";

        const checkboxId = `cbx-${Math.random().toString(36).substring(2, 8)}`;

        const input = document.createElement("input");
        input.className = "inp-cbx";
        input.type = "checkbox";
        input.id = checkboxId;
        input.checked = item.status === "completed";
        input.title = input.checked ? "Mark as not done" : "Mark as done";
        input.addEventListener("change", () => {
            this._hass.callService("sb_todo", "update_item", {
                entity_id: entityId,
                item: item.summary,
                status: input.checked ? "completed" : "needs_action",
            });
        });

        const label = document.createElement("label");
        label.className = "cbx";
        label.setAttribute("for", checkboxId);
        label.innerHTML = `
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span></span>
      `;

        checkboxWrapper.appendChild(input);
        checkboxWrapper.appendChild(label);

        const customCheck = document.createElement("span");
        customCheck.className = "checkmark";

        topRow.appendChild(deleteButton);
        topRow.appendChild(name);
        topRow.appendChild(checkboxWrapper);

        // ===== BOTTOM ROW: Parameters (bulleted, multiline) =====
        const details = document.createElement("ul");
        details.style.fontSize = "0.85em";
        details.style.color = "#555";
        details.style.margin = "0.5em 0 0 1em";
        details.style.padding = "0";
        details.style.listStyleType = "disc";

        if (item.due_datetime) {
            const due = new Date(item.due_datetime * 1000);
            const now = new Date();

            const msDiff = due.getTime() - now.getTime();
            const daysLeft = Math.ceil(msDiff / (1000 * 60 * 60 * 24));

            // ⏳ Countdown display
            const liCountdown = document.createElement("li");
            if (daysLeft > 0) {
                liCountdown.textContent = `⏳ Due in ${daysLeft} day${daysLeft !== 1 ? "s" : ""}`;
            } else if (daysLeft === 0) {
                liCountdown.textContent = `⏳ Due today`;
            } else {
                liCountdown.textContent = `⚠️ Overdue by ${Math.abs(daysLeft)} day${Math.abs(daysLeft) !== 1 ? "s" : ""}`;
            }
            details.appendChild(liCountdown);

            // 📅 Due date display
            const formatted = due.toLocaleString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            });
            const liDate = document.createElement("li");
            liDate.textContent = `📅 Due: ${formatted}`;
            details.appendChild(liDate);
        }

        if (item.requiring) {
            const li = document.createElement("li");
            li.textContent = `🔁 Requiring`;
            details.appendChild(li);
        }

        if (item.period) {
            const li = document.createElement("li");
            li.textContent = `🕒 Repeats: every ${item.period}`;
            details.appendChild(li);
        }

        line.appendChild(topRow);
        line.appendChild(details);

        return line;
    }

    _renderAddListButton() {
        // Stub for add-list logic, populated in _renderAddButton
    }

    _renderAddButton() {
        this.actions.innerHTML = "";

        if (this.entities.length) {
            const addTaskBtn = document.createElement("button");
            addTaskBtn.textContent = "Add Task";
            addTaskBtn.style.fontSize = "1.3em";
            addTaskBtn.style.marginRight = "1em";
            addTaskBtn.className = 'sb-button';
            addTaskBtn.addEventListener("click", () => this._showAddDialog());
            this.actions.appendChild(addTaskBtn);
        }

        const addListBtn = document.createElement("button");
        addListBtn.textContent = "Add List";
        addListBtn.style.fontSize = "1.3em";
        addListBtn.className = 'sb-button';
        addListBtn.addEventListener("click", () => this._showAddListDialog());
        this.actions.appendChild(addListBtn);
    }


    _showEditDialog(item, entityId) {
        if (!this._editDialog) this._editDialog = this._createDialog();
        this._populateDialog(this._editDialog, item, false, entityId);
        this._editDialog.showModal();
    }

    _showAddDialog() {
        if (!this._addDialog) this._addDialog = this._createDialog();
        this._populateDialog(this._addDialog, null, true, this.entities[this.selectedIndex].entity_id);
        this._addDialog.showModal();
    }

    _showAddListDialog() {
        if (!this._addListDialog) {
            this._addListDialog = document.createElement("dialog");
            this._addListDialog.style.padding = "1em";
            this._addListDialog.style.maxWidth = "400px";
            this._addListDialog.style.border = "1px solid #97989c"
            this._addListDialog.style.borderRadius = "6px";
            this._addListDialog.style.background = "#000"
            this._addListDialog.style.color = "#fff"

            const input = document.createElement("input");
            input.type = "text";
            input.placeholder = "New list name";
            input.className = "sb-input";
            input.style.marginBottom = "1em";
            this._addListDialog.appendChild(input);

            const buttonsContainer = document.createElement("div");
            buttonsContainer.style.display = "flex";
            buttonsContainer.style.justifyContent = "center";
            buttonsContainer.style.gap = "1em";

            const saveBtn = document.createElement("button");
            saveBtn.textContent = "Create";
            saveBtn.style.marginRight = "1em";
            saveBtn.className = 'sb-button';
            saveBtn.addEventListener("click", async () => {
                const name = input.value.trim();
                if (!name) {
                    alert("List name cannot be empty");
                    return;
                }

                if (this.entities.length >= 5) {
                    alert("You can only have up to 5 todo lists.");
                    return;
                }

                if (confirm(`Are you sure you want to create a new list "${name}"?`)) {
                    await this._hass.callService("sb_todo", "create_list", { name });
                    this._addListDialog.close();
                    setTimeout(() => this._refreshLists(), 500);
                }
            });

            const cancelBtn = document.createElement("button");
            cancelBtn.textContent = "Cancel";
            cancelBtn.className = 'sb-button';
            cancelBtn.addEventListener("click", () => this._addListDialog.close());


            buttonsContainer.appendChild(saveBtn);
            buttonsContainer.appendChild(cancelBtn);


            this._addListDialog.appendChild(buttonsContainer);
            this.shadowRoot.appendChild(this._addListDialog);
            this._addListInput = input;
        }

        this._addListInput.value = "";
        this._addListDialog.showModal();
    }

    _createDialog() {
        const dialog = document.createElement("dialog");
        dialog.style.padding = "1em";
        dialog.style.maxWidth = "400px";
        dialog.style.border = "1px solid #97989c"
        dialog.style.borderRadius = "6px";
        dialog.style.background = "#000"
        dialog.style.color = "#fff"

        // === Task Name
        const nameWrapper = document.createElement("div");
        nameWrapper.className = "sb-row vertical";

        const nameLabel = document.createElement("label");
        nameLabel.textContent = "Task Name";
        nameLabel.className = "sb-label";

        dialog.nameInput = document.createElement("input");
        dialog.nameInput.type = "text";
        dialog.nameInput.className = "sb-input";

        nameWrapper.appendChild(nameLabel);
        nameWrapper.appendChild(dialog.nameInput);

        // === Date + Time
        const datetimeRow = document.createElement("div");
        datetimeRow.className = "sb-row";

        dialog.dateInput = document.createElement("input");
        dialog.dateInput.type = "date";
        dialog.dateInput.className = "sb-input";
        dialog.dateInput.style.flex = "1";
        dialog.dateInput.placeholder="dd/mm/yyyy";

        dialog.timeInput = document.createElement("input");
        dialog.timeInput.type = "time";
        dialog.timeInput.className = "sb-input";
        dialog.timeInput.style.flex = "1";
        dialog.dateInput.placeholder="--:-- --";

        datetimeRow.appendChild(dialog.dateInput);
        datetimeRow.appendChild(dialog.timeInput);

        // === Requiring + Period
        const recurringRow = document.createElement("div");
        recurringRow.className = "sb-row";

        const checkWrap = document.createElement("div");
        checkWrap.className = "sb-checkbox-row";
        dialog.requiringCheck = document.createElement("input");
        dialog.requiringCheck.type = "checkbox";
        const checkLabel = document.createElement("label");
        checkLabel.textContent = "Requiring";

        checkWrap.appendChild(dialog.requiringCheck);
        checkWrap.appendChild(checkLabel);

        dialog.periodAmount = document.createElement("input");
        dialog.periodAmount.type = "number";
        dialog.periodAmount.className = "sb-input";
        dialog.periodAmount.style.width = "60px";
        dialog.periodAmount.placeholder = "e.g. 2";
        dialog.periodAmount.disabled = true;

        dialog.periodUnit = document.createElement("select");
        dialog.periodUnit.className = "sb-select";
        dialog.periodUnit.disabled = true;

        ["minute", "hour", "day", "week", "month", "year"].forEach(unit => {
            const opt = document.createElement("option");
            opt.value = unit;
            opt.textContent = unit;
            dialog.periodUnit.appendChild(opt);
        });

        dialog.requiringCheck.addEventListener("change", () => {
            const enable = dialog.requiringCheck.checked;
            dialog.periodAmount.disabled = !enable;
            dialog.periodUnit.disabled = !enable;
        });

        recurringRow.appendChild(checkWrap);
        recurringRow.appendChild(dialog.periodAmount);
        recurringRow.appendChild(dialog.periodUnit);

        // === Buttons
        dialog.saveBtn = document.createElement("button");
        dialog.saveBtn.textContent = "Save";
        dialog.saveBtn.className = "sb-button";
        dialog.saveBtn.style.marginRight = "1em";

        dialog.cancelBtn = document.createElement("button");
        dialog.cancelBtn.textContent = "Cancel";
        dialog.cancelBtn.className = "sb-button";
        dialog.cancelBtn.addEventListener("click", () => dialog.close());

        dialog.appendChild(nameWrapper);
        dialog.appendChild(datetimeRow);
        dialog.appendChild(recurringRow);

        const buttonsContainer = document.createElement("div");
        buttonsContainer.style.display = "flex";
        buttonsContainer.style.justifyContent = "center";
        buttonsContainer.style.gap = "1em";

        buttonsContainer.appendChild(dialog.saveBtn);
        buttonsContainer.appendChild(dialog.cancelBtn);

        dialog.appendChild(buttonsContainer);
        this.shadowRoot.appendChild(dialog);
        return dialog;
    }



    _populateDialog(dialog, item, isNew, entityId) {
        if (item) {
            dialog.nameInput.value = item.summary;
            if (item.due_datetime) {
                const dt = new Date(item.due_datetime * 1000); // Convert to local Date object

                // Convert to local date string (yyyy-mm-dd)
                const localDate = dt.toLocaleDateString('en-CA'); // 'en-CA' gives YYYY-MM-DD format

                // Convert to local time string (HH:MM)
                const localTime = dt.toLocaleTimeString('en-US', {
                    hour12: false,
                    hour: "2-digit",
                    minute: "2-digit"
                });

                dialog.dateInput.value = localDate;
                dialog.timeInput.value = localTime;

            } else {
                dialog.dateInput.value = "";
                dialog.timeInput.value = "";
            }
            // Set checkbox
            dialog.requiringCheck.checked = !!item?.requiring;

            // Enable/disable period based on checkbox
            const togglePeriodInputs = () => {
                const enabled = dialog.requiringCheck.checked;
                dialog.periodAmount.disabled = !enabled;
                dialog.periodUnit.disabled = !enabled;
            };

            // Set period values if available
            if (item?.period) {
                dialog.periodAmount.value = item.period.match(/\d+/)?.[0] || "";
                dialog.periodUnit.value = item.period.match(/[a-zA-Z]+/)?.[0] || "d";
            } else {
                dialog.periodAmount.value = "";
                dialog.periodUnit.value = "d";
            }

            // Initial toggle
            togglePeriodInputs();

            // Listen for checkbox toggle
            dialog.requiringCheck.addEventListener("change", togglePeriodInputs);
        } else {
            dialog.nameInput.value = "";
            dialog.dateInput.value = "";
            dialog.timeInput.value = "";
            dialog.requiringCheck.checked = false;
            dialog.periodAmount.value = "";
            dialog.periodUnit.value = "d";
        }

        dialog.saveBtn.onclick = () => {
            const due_date = dialog.dateInput.value;
            const due_time = dialog.timeInput.value;

            let due_timestamp = null;
            if (due_date) {
                const datetimeStr = due_time ? `${due_date}T${due_time}` : `${due_date}T00:00`; // fallback to midnight if no time
                const dateObj = new Date(datetimeStr);
                if (!isNaN(dateObj.getTime())) {
                    due_timestamp = Math.floor(dateObj.getTime() / 1000); // Convert to seconds
                }
            }

            const amount = dialog.periodAmount.value?.trim() ?? "";
            const periodStr = amount !== "" && Number.isInteger(Number(amount)) && Number(amount) > 0
                ? `${amount}${dialog.periodUnit.value}`
                : null;

            const serviceData = {
                entity_id: entityId,
                due_datetime: due_timestamp,  // send as seconds since epoch
                requiring: dialog.requiringCheck.checked,
                period: periodStr,
            };

            if (isNew) {
                serviceData.item = dialog.nameInput.value.trim();
                this._hass.callService("sb_todo", "add_item", serviceData);
            } else {
                serviceData.item = item.summary;
                serviceData.rename = dialog.nameInput.value.trim();
                this._hass.callService("sb_todo", "update_item", serviceData);
            }

            dialog.close();
        };

    }

    getCardSize() {
        return 6;
    }
}

customElements.define("sb-todo-list", SbTodoListCard);