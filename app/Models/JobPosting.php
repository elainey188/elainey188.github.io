<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobPosting extends Model
{
    use HasFactory;

    protected $fillable = [
        'Job Title',
        'Job Description',
        'Salary',
        'Employer_id',
    ];

    public function employer()
    {
        return $this->belongsTo(Employer::class);
    }
}
