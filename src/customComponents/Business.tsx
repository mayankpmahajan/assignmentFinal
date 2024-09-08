const Business = () => {
  return (
    <main className="relative z-10 w-full bg-white  rounded-xl mt-[-2rem] md:mt-[-4rem] p-4 h-fit">
      <h1 className="text-xl font-semibold">Company's Business</h1>

      <section className="business-section-container">
        <h2>Company Type</h2>

        <section className="business-section-card-container">
          <div className="business-section-card">Contact Manufacturing</div>
          <div className="business-section-card">Export</div>
          <div className="business-section-card">White Level Brands</div>
        </section>
      </section>

      <section className="business-section-container">
        <h2 className="">Product Categories</h2>

        <section className="business-section-card-container" >
          <div className="business-section-card">Juices</div>
          <div className="business-section-card">Vegetables</div>
          <div className="business-section-card">Grain</div>
          <div className="business-section-card">Grain</div>
          <div className="business-section-card">Grain</div>
        </section>
      </section>

      <section className="business-section-container">
        <h2>Product Items</h2>

        <section className="business-section-card-container">
          <div className="business-section-card">Item 01</div>
          <div className="business-section-card">Item 02</div>
          <div className="business-section-card">Item 03</div>
          <div className="business-section-card">Item 04</div>
          <div className="business-section-card">Item 05</div>
        </section>
      </section>
    </main>
  );
};

export default Business;
