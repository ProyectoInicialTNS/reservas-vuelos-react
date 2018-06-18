function formatDate(flightDay) {
    let date = new Date(Number(flightDay));
    var monthNames = [
      "Enero", "Febrero", "Marzo",
      "Abril", "Mayo", "Junio", "Julio",
      "Agosto", "Septiembre", "Ocutubre",
      "Noviembre", "Diciembre"
    ];
    return date.getHours() + ':' + date.getMinutes() + ' - ' + date.getDate() + '/' + monthNames[date.getMonth()] + '/' + date.getFullYear();
  }

  export {formatDate};