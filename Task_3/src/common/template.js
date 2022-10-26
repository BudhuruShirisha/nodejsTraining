function getPatientDetails() {
    const html = `<html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title></title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      />
    </head>
    <body>
      
  
      <div class="container">
        <h1 class="text-center" style="font-size: 35px;">
        <img src="{{imgurl}}" width="50"/> Remote Patient Monitoring Report
        </h1>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Prepared For</th>
              <th>Requested by</th>
              <th>Generated On</th>
            </tr>
          </thead>
          <tbody>
              
            <tr>
              <td>{{officeName}}</td>
              <td>{{firstname}} {{lastname}}</td>
              <td>{{date}}</td>
            </tr>
  
          </tbody>
  
        </table>
        <table class="table table-bordered">
          <tr>
            <th colspan="2">
             Patient Demographics
            </th>
          </tr>
          
          <tbody>
            <tr>
              <td style="padding-left: 5px;
                   padding-bottom: 3px;">
              <strong style="font-size: 35px;">
              {{firstname}} {{lastname}} </strong>
              <br/>
              DOB:{{dob}} (age:{{age}} yrs) {{gender}} <br/>
              Mobile:{{phone}}<br />
  
              <td>Primary Care Physician Details <br/><br/>
              Email:{{email}} <br/>
              Address: {{address.line1}} {{address.line2}} {{address.city}} {{address.state}} {{address.zip}}
              </td>
            </tr>
  
          </tbody>
        </table>
      </div>
    </body>
  </html>`
    return html;
}
module.exports = { getPatientDetails };