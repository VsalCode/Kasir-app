import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Image } from 'react-bootstrap'

export default class succes extends Component {
  render() {
    return (
      <div className='text-center mt-5'>
        {/* TAMBAHIN GAMBAR */}
        <Image src='assets/images' width='300'/> 
        <h2>SUKSES PESAN</h2>
        <p>Terimakasih sudah memesan</p>
        <Button variant='primary' as={Link} to='/' >kembali</Button>
      </div>
    )
  }
}
 