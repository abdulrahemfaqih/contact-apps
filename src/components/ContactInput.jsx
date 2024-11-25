import React from "react";

class ContactInput extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         name: "",
         tag: "",
         error: "",
      };

      this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
      this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
      this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
   }

   onNameChangeEventHandler(event) {
      this.setState(() => {
         return {
            name: event.target.value,
         };
      });
   }
   onTagChangeEventHandler(event) {
      this.setState(() => {
         return {
            tag: event.target.value,
         };
      });
   }

   onSubmitEventHandler(event) {
      event.preventDefault();
      const { name, tag } = this.state;
      if (name.trim() === "" || tag.trim() === "") {
         this.setState({ error: "Nama dan Tag tidak boleh kosong" });
         return;
      }
      this.props.addContact(name, tag);
      this.setState({ name: "", tag: "", error: "" });
   }

   render() {
      return (
         <form
            className="flex flex-col bg-zinc-50 gap-y-4 p-4 border-2 border-dashed rounded-lg my-3"
            onSubmit={this.onSubmitEventHandler}
         >
            <input
               className="__input"
               type="text"
               placeholder="nama"
               value={this.state.name}
               onChange={this.onNameChangeEventHandler}
            />
            <input
               className="__input"
               type="text"
               placeholder="tag"
               value={this.state.tag}
               onChange={this.onTagChangeEventHandler}
            />
            {this.state.error && <p className="text-red-500 text-sm">{this.state.error}</p>}
            <button
               className="block border-2 py-1 text-sm bg-neutral-200 rounded-lg"
               type="submit"
            >
               Tambah
            </button>
         </form>
      );
   }
}

export default ContactInput;
